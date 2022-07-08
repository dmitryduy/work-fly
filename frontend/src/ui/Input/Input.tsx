import { FC } from "react";

import { InputContainer, Label, InputItem, Info, InputWrapper } from "./Input.styles";
import { IInputProps } from "./Input.typings";

const Input: FC<IInputProps> = props => {
  return (
    <InputContainer>
      <Label>
        {props.label}
        <InputWrapper>
          <InputItem
            className={props.error && 'error'}
            type={props.type}
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
          />
          {props.iconType}
        </InputWrapper>
      </Label>
      {
        (props.tooltip || props.error) &&
        <Info className={props.error ? 'error' : 'tooltip'}>{props.error || props.tooltip}</Info>
      }
    </InputContainer>
  );
};

export default Input;
