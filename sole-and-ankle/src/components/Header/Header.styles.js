import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
`;

export const Logo = styled.h1`
  text-decoration: none;
  font-weight: ${WEIGHTS.bold};
  font-size: 1.5rem;
  color: ${COLORS.gray[900]};
`;

export const Nav = styled.nav`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const NavLink = styled.a`
  font-size: 1.125rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  margin-right: 25px;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;
