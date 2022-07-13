import {ReactNode} from "react";

export interface ILabelProps {
  children: ReactNode;
  labelIcon?: boolean;
  crossIcon?: boolean;
  labelLogicFunc: () => void;
}
