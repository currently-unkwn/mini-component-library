/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8 + "px",
    padding: 0,
    radius: 4 + "px",
  },
  medium: {
    height: 12 + "px",
    padding: 0,
    radius: 4 + "px",
  },
  large: {
    height: 16 + "px",
    padding: 4 + "px",
    radius: 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--padding": styles.padding, "--radius": styles.radius }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <Trimmer>
        <Progress
          style={{ "--width": value + "%", "--height": styles.height }}
        />
      </Trimmer>
    </Wrapper>
  );
};

const Trimmer = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Progress = styled.div`
  height: var(--height);
  width: var(--width);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
