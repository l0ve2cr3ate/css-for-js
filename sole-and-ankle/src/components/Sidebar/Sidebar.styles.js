import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

export const Link = styled.a`
  text-decoration: none;
  color: ${({ active }) => (active ? COLORS.primary : COLORS.gray[900])};
  font-weight: ${WEIGHTS.medium};
  line-height: 2;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
`;
