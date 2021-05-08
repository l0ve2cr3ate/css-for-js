import React, { useRef } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--font-size": "14px",
    "--text-indent": "14px",
    "--icon": 14,
  },
  large: {
    "--font-size": "20px",
    "--text-indent": "20px",
    "--icon": 20,
  },
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputIcon = styled(Icon)`
  font-size: var(--font-size);
  position: absolute;
  margin: 0 5px 0 0;
  color: ${COLORS.gray500};
  ${InputWrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const InputElement = styled.input`
  ${({ size }) => SIZES[size]}
  text-indent: var(--text-indent);
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  font-weight: 700;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid black;
  padding: 5px;
  width: ${({ width }) => width + "px"};
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 3px;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const inputRef = useRef();

  return (
    <InputWrapper>
      <VisuallyHidden>
        <label htmlFor={label}>{label}</label>
      </VisuallyHidden>
      <InputIcon
        id={icon}
        size={SIZES[size]["--icon"]}
        onClick={() => inputRef?.current?.focus()}
      />
      <InputElement
        size={size}
        ref={inputRef}
        width={width}
        id={label}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default IconInput;
