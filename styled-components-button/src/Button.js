import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Btn = styled.button`
  text-transform: uppercase;
  background-color: ${({ variant }) =>
    variant === "fill"
      ? COLORS.primary
      : variant === "outline"
      ? COLORS.white
      : "transparent"};
  padding: ${({ size }) =>
    size === "large"
      ? "12px 24px"
      : size === "medium"
      ? "10px 20px"
      : "8px 16px"};
  color: ${({ variant }) =>
    variant === "fill"
      ? COLORS.white
      : variant === "outline"
      ? COLORS.primary
      : COLORS.transparentGray75};
  border: 1px solid;
  border-color: ${({ variant }) =>
    variant === "fill"
      ? "transparent"
      : variant === "outline"
      ? COLORS.primary
      : "transparent"};
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: ${({ size }) =>
    size === "large" ? "1rem" : size === "medium" ? "0.875rem" : "0.75rem"};

  &:focus {
    outline-offset: 4px;
    outline-color: ${({ variant }) =>
      variant === "fill"
        ? COLORS.primary
        : variant === "outline"
        ? COLORS.primary
        : COLORS.transparentGray75};
  }

  &:hover {
    background-color: ${({ variant }) =>
      variant === "fill"
        ? COLORS.primaryLight
        : variant === "outline"
        ? COLORS.offwhite
        : COLORS.transparentGray15};
    border-color: ${({ variant }) =>
      variant === "fill"
        ? "transparent"
        : variant === "outline"
        ? COLORS.primaryLight
        : "transparent"};
    color: ${({ variant }) =>
      variant === "fill"
        ? COLORS.white
        : variant === "outline"
        ? COLORS.primaryLight
        : COLORS.black};
  }
`;

const Button = ({ variant, size, children }) => {
  return (
    <Btn variant={variant} size={size}>
      {children}
    </Btn>
  );
};

export default Button;
