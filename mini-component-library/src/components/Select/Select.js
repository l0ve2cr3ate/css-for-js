import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const ArrowDown = styled(Icon)`
  color: red;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <select value={value} onChange={onChange}>
        {children}
      </select>
      <ArrowDown id="chevron-down" />
    </>
  );
};

export default Select;
