/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--border-radius": "5px",
    "--inner-border-radius": "5px",
    "--inner-height": "8px",
    "--padding": 0,
  },
  medium: {
    "--height": "10px",
    "--border-radius": "3px",
    "--inner-border-radius": "3px",
    "--inner-height": "10px",
    "--padding": 0,
  },
  large: {
    "--height": "18px",
    "--border-radius": "3px",
    "--inner-border-radius": "1.5px",
    "--inner-height": "12px",
    "--padding": "3px",
  },
};

const OuterProgressBar = styled.div`
  /* Add css variables to styled component */
  ${({ size }) => SIZES[size]}
  background-color: ${COLORS.gray50};
  height: var(--height);
  width: 20rem;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
  overflow: hidden;
`;

const InnerProgressBarWrapper = styled.div`
  ${({ size }) => SIZES[size]}
  overflow: hidden;
  border-radius: var(--inner-border-radius);
  height: var(--inner-height);
`;

const InnerProgressBar = styled.div`
  ${({ size }) => SIZES[size]}
  width: ${(props) => props.value + "%"};
  background-color: ${COLORS.primary};
  height: var(--inner-height);
  border-radius: var(--inner-border-radius) 0 0 var(--inner-border-radius);
`;

const ProgressBar = ({ value, size }) => {
  return (
    <OuterProgressBar
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      size={size}
    >
      <InnerProgressBarWrapper size={size}>
        <InnerProgressBar size={size} value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </InnerProgressBar>
      </InnerProgressBarWrapper>
    </OuterProgressBar>
  );
};

export default ProgressBar;
