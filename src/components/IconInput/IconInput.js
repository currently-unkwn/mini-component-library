import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    padding: "2px 0 2px 24px",
    fontSize: 14 / 16,
    borderBottom: 1,
    bottom: -5,
  },
  large: {
    padding: "5px 0 5px 36px",
    fontSize: 18 / 16,
    borderBottom: 2,
    bottom: 4,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  const iconSize = size === "small" ? 16 : 24;

  return (
    <Wrapper>
      <IconWrapper for={label} style={{ "--bottom": styles.bottom + "px" }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <TextInput
        style={{
          "--width": width + "px",
          "--fontSize": styles.fontSize + "rem",
          "--borderBottom": styles.borderBottom + "px",
          "--padding": styles.padding,
        }}
        placeholder={placeholder}
        id={label}
      />
    </Wrapper>
  );
};

// padding, border, icon size, font size

const IconWrapper = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  bottom: var(--bottom);
  margin: auto;
  width: 24px;
  height: 24px;
  color: ${COLORS.gray500};
  cursor: pointer;
`;

const TextInput = styled.input`
  width: var(--width);
  padding: var(--padding);
  font-size: var(--fontSize);
  font-weight: 700;
  color: ${COLORS.gray700};
  background-color: transparent;
  border: none;
  border-bottom: var(--borderBottom) solid ${COLORS.black};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 1px;
  }
`;

const Wrapper = styled.div`
  position: relative;

  &:hover ${TextInput}, &:hover ${IconWrapper} {
    color: ${COLORS.black};
  }
`;

export default IconInput;
