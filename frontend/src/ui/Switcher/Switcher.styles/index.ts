import styled from "styled-components";

import { ISwitcherStyledProps } from "../Switcher.typings";

export const SwitcherStyled = styled.button<ISwitcherStyledProps>`
  background-color: ${props => (props.isToggle ? props.color : '#EBEBEB')};
  border-radius: 24px;
  border: none;
  width: 40px;
  height: 20px;
  transition: all .2s;
  &::before {
    transition: all .2s;
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.whiteColor};
    transform: translate(${props => (props.isToggle ? '10px' : '-10px')}, 1px);
  }
`;