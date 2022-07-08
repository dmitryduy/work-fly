import { ReactNode } from "react";

export interface IInputProps {
  value: string;
  onChange: () => void;
  type: 'text' | 'password' | 'tel';
  size: 'm' | 'xs';
  placeholder: string;
  tooltip?: string;
  label: string;
  error?: string;
  iconType: ReactNode;
}