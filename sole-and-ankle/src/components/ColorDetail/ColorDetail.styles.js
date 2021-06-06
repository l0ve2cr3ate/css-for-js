import styled from "styled-components/macro";
import { COLORS } from "../../constants";

export const ShoeColor = styled.div`
  margin-top: ${({ variant }) => variant === "sale" && "-20px"};
  color: ${COLORS.gray[700]};
`;
