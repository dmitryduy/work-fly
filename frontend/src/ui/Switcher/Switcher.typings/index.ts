import { Dispatch, SetStateAction } from "react";

export interface ISwitcherStyledProps {
  isToggle: boolean;
  color: string;
}

export interface ISwitcherProps {
  color: string;
  isToggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}
