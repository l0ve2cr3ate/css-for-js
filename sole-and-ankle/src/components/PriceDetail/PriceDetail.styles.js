import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

const getPriceColor = (variant) => {
  if (variant === "sale") {
    return COLORS.primary;
  } else if (variant === "strike-through") {
    return COLORS.gray[700];
  } else return COLORS.gray[900];
};

export const ShoePrice = styled.div`
  color: ${({ variant }) => getPriceColor(variant)};
  text-decoration: ${({ variant }) =>
    variant === "strike-through" && "line-through"};
  font-weight: ${({ variant }) => variant === "sale" && WEIGHTS.medium};
`;
