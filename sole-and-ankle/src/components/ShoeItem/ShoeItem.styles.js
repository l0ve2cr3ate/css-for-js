import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

export const ShoeItemContainer = styled.a`
  flex: 1 1 30%;
  position: relative;
  text-decoration: none;
`;

export const ShoeImage = styled.img`
  max-width: 100%;
`;

export const ShoeDetail = styled.div`
  font-size: 1rem;
`;

export const RowDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShoeName = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;
