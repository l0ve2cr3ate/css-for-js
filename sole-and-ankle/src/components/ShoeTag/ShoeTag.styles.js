import styled from "styled-components/macro";
import { COLORS } from "../../constants";

export const Tag = styled.div`
  padding: 7px 12px;
  background-color: ${({ variant }) =>
    variant === "sale"
      ? COLORS.primary
      : variant === "release"
      ? COLORS.secondary
      : "none"};
  display: inline-flex;
  border-radius: 3px;
  color: ${COLORS.white};
  position: absolute;
  right: -5px;
  top: 10px;
`;
