import styled from "styled-components/macro";

import { COLORS } from "../../constants";
import Icon from "../Icon";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  left: 0;
  margin: auto;
`;

export const InputElement = styled.input`
  text-indent: 20px;
  background-color: ${COLORS.gray[900]};
  color: ${COLORS.gray[300]};
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding: 5px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`;
