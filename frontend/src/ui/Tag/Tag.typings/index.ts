import {ReactNode} from "react";

export interface ITagStyledProps {
  backgroundColor: string;
  textColor: string;
}

export interface ITagProps {
  backgroundColor: string;
  textColor: string;
  children: ReactNode;
}
