import styled from "styled-components/macro";
import { COLORS } from "../../constants";

export const SuperHeaderContainer = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.875rem;
  background-color: ${COLORS.gray[900]};
  color: ${COLORS.gray[300]};
  padding: 10px 25px;
  align-items: center;
`;

export const MarketingMessage = styled.div`
  margin-right: auto;
  color: ${COLORS.white};
`;

export const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
