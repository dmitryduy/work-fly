import { FC } from "react";

import { SwitcherStyled } from "./Switcher.styles";
import { ISwitcherProps } from "./Switcher.typings";

export const Switcher: FC<ISwitcherProps> = ({ color, isToggle, setToggle }) => {
  return (
    <SwitcherStyled
      isToggle={isToggle}
      color={color}
      onClick={() => setToggle(!isToggle)}
    />
  );
};
