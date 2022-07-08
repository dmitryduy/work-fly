import { RegisterOptions } from "react-hook-form/dist/types/validator";

type unusedErrors =
  'valueAsNumber'
  | 'valueAsDate'
  | 'setValueAs'
  | 'disabled'
  | 'onChange'
  | 'onBlur'
  | 'shouldUnregister'
  | 'value';

export interface ITextInputProps {
  tooltip?: string;
  label: string;
  placeholder: string;
  errors: Partial<Omit<Record<keyof RegisterOptions, string>, unusedErrors>>;
  size: 'm' | 'xs';
  resetField: () => void;
}