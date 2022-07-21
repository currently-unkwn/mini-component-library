import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} strokeWidth={1} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);

  /* Ignore mouse and click events */
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  /* A reset of styles, including removing the default dropdown arrow */
  appearance: none;
  /* Additional resets for further consistency */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const PresentationalBit = styled.div`
  padding: 14px 16px;
  padding-right: 52px;

  font-size: ${16 / 16}rem;
  font-weight: 400;
  color: ${COLORS.gray700};
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};

  ${NativeSelect}:focus + & {
    /* Fallback style */
    outline: 1px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
