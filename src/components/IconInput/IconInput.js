import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14 / 16,
    borderThickness: 1,
    height: 24,
    iconSize: 16,
  },
  large: {
    fontSize: 18 / 16,
    borderThickness: 2,
    height: 36,
    iconSize: 24,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>

      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>

      <TextInput
        style={{
          "--width": width + "px",
          "--height": styles.height / 16 + "rem",
          "--font-size": styles.fontSize + "rem",
          "--border-thickness": styles.borderThickness + "px",
        }}
        {...delegated}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);

  cursor: pointer;
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;

// Solution with COMPOSITION

// const IconInput = ({
//   label,
//   icon,
//   width = 250,
//   size,
//   ...delegated
// }) => {
//   const iconSize = size === 'small' ? 16 : 24;
//   const Input = size === 'small'
//     ? SmallInput
//     : LargeInput;
//   return (
//     <Wrapper>
//       <IconWrapper style={{ '--size': iconSize + 'px' }}>
//         <Icon id={icon} size={iconSize} />
//       </IconWrapper>
//       <Input
//         {...delegated}
//         style={{
//           '--width': width + 'px',
//         }}
//       />
//     </Wrapper>
//   );
// };
// const TextInput = styled.input`
//   width: var(--width);
//   border: none;
//   color: inherit;
//   font-weight: 700;
//   outline-offset: 2px;
//   &::placeholder {
//     font-weight: 400;
//     color: ${COLORS.gray500};
//   }
// `;
// const SmallInput = styled(TextInput)`
//   height: 24px;
//   font-size: ${14 / 16}rem;
//   border-bottom: 1px solid ${COLORS.black};
//   padding-left: 24px;
// `;
// const LargeInput = styled(TextInput)`
//   height: 36px;
//   font-size: ${18 / 16}rem;
//   border-bottom: 2px solid ${COLORS.black};
//   padding-left: 36px;
// `;
