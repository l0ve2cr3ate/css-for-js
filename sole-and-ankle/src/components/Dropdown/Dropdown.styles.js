import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";
import Icon from "../Icon";

export const Label = styled.label`
  color: ${COLORS.gray[700]};
  padding-right: 15px;
`;

export const SelectElement = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.medium};
  font-size: 1rem;

  option {
    background-color: ${COLORS.gray[100]};
  }
`;

export const DropdownContainer = styled.span`
  position: relative;
  padding: 5px 35px 5px 10px;
  border-radius: 5px;
  border-color: transparent;
  background-color: ${COLORS.gray[100]};
  color: ${COLORS.gray[900]};
  height: 40px;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: auto 5px -webkit-focus-ring-color;
  }
`;

export const ArrowDown = styled(Icon)`
  position: absolute;
  right: 0;
  pointer-events: none;
  padding-right: 5px;
  color: ${COLORS.gray500};
  ${DropdownContainer}:hover & {
    color: ${COLORS.black};
  }
`;
