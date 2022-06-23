import { useState } from "react";
import styled from "styled-components";

import { ISwitcherProps } from "./Switcher.types";

const SwitcherStyled = styled.button<ISwitcherProps>`
  background-color: ${props => (props.toggle ? props.theme.colors.primaryColor : '#EBEBEB')};
  border-radius: 24px;
  margin: 10px;
  border: none;
  width: 40px;
  height: 20px;
  &::before {
    transition: all .2s;
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #fff;
    transform: translate(${props => (props.toggle ? '10px' : '-10px')}, 1px);
  }
`;

const Switcher = () => {
  const [toggle, setToggle] = useState(false);
  return <SwitcherStyled toggle={toggle} onClick={() => setToggle(!toggle)} />;
};

export default Switcher;
