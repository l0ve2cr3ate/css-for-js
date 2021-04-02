import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Btn = styled.button`
  text-transform: uppercase;
  border: 1px solid;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  padding: ${({ size }) =>
    size === "large"
      ? "12px 24px"
      : size === "medium"
      ? "10px 20px"
      : "8px 16px"};
  font-size: ${({ size }) =>
    size === "large" ? "1rem" : size === "medium" ? "0.875rem" : "0.75rem"};
  &:focus {
    outline-offset: 4px;
  }
`;

const FillButton = styled(Btn)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  border-color: transparent;
  &:hover {
    background-color: ${COLORS.primaryLight};
    color: ${COLORS.white};
  }
  &:focus {
    outline-color: ${COLORS.primary};
  }
`;

const OutlineButton = styled(Btn)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border-color: ${COLORS.primary};
  &:hover {
    background-color: ${COLORS.offWhite};
    border-color: ${COLORS.primaryLight};
    color: ${COLORS.primaryLight};
  }
  &:focus {
    outline-color: ${COLORS.primary};
  }
`;

const GhostButton = styled(Btn)`
  color: ${COLORS.transparentGray75};
  border-color: transparent;
  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
  &:focus {
    outline-color: ${COLORS.transparentGray75};
  }
`;

const Button = ({ variant, size, children }) => {
  if (variant === "fill") {
    return <FillButton size={size}>{children}</FillButton>;
  } else if (variant === "outline") {
    return <OutlineButton size={size}>{children}</OutlineButton>;
  } else return <GhostButton size={size}>{children}</GhostButton>;
};

export default Button;
