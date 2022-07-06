import styled from 'styled-components';

import { ISwitcherStyledProps } from '../Switcher.typings';

export const SwitcherStyled = styled.button<ISwitcherStyledProps>`
  background-color: ${({ theme, color, isToggle }) => (isToggle ? color : theme.colors.gray40)};
  border-radius: 24px;
  border: none;
  width: 40px;
  height: 20px;
  transition: all ${({ theme }) => theme.transition.base};
  
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    transform: translate(${({ isToggle }) => (isToggle ? '10px' : '-10px')}, 1px);
    transition: all ${({ theme }) => theme.transition.base};
  }
`;
