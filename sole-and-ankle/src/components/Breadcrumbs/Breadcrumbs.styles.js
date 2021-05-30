import styled from "styled-components/macro";
import { COLORS } from "../../constants";

export const BreadcrumbsContainer = styled.nav`
  display: flex;
  font-size: 0.875rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};

  &:hover {
    color: ${COLORS.gray[900]};
  }
`;

export const BreadcrumbContainer = styled.div`
  &:not(:first-of-type) {
    &::before {
      content: "/";
      color: ${COLORS.gray[300]};
      margin: 0 8px;
    }
  }
`;
