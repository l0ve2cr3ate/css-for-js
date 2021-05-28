import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

export const LogoText = styled.h1`
  font-weight: ${WEIGHTS.bold};
  font-size: 1.5rem;
  color: ${COLORS.gray[900]};
`;

export const LogoContainer = styled.a`
  text-decoration: none;
`;
