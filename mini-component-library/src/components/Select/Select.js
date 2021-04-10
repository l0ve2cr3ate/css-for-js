import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Label = styled.label`
  color: ${COLORS.gray500};
  padding-right: 5px;
`;

const SelectElement = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  option {
    background-color: ${COLORS.transparentGray15};
  }
`;

const SelectWrapper = styled.span`
  position: relative;
  padding: 5px 35px 5px 10px;
  border-radius: 5px;
  border-color: transparent;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray500};
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

const ArrowDown = styled(Icon)`
  position: absolute;
  right: 0;
  pointer-events: none;
  padding-right: 5px;
  color: ${COLORS.gray500};
  ${SelectWrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <VisuallyHidden>
        <Label htmlFor={label}>{label}</Label>
      </VisuallyHidden>
      <SelectElement id={label} value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <ArrowDown id="chevron-down" />
      <div>{displayedValue}</div>
    </SelectWrapper>
  );
};

export default Select;
