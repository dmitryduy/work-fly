import { FieldPath, FieldValues, useController, UseControllerProps } from "react-hook-form";

import { ITextInputProps } from "../TextInput/TextInput.typings";
import Input from "../../ui/Input/Input";
import InputIcon from "../../ui/InputIcon/InputIcon";

const InputController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  >(props: ITextInputProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field: {value, onChange},
    fieldState: {error},
  } = useController({
    name: props.name,
    control: props.control,
    rules: {...props.rules}
  });

  return (
    <Input
      value={value}
      onChange={onChange}
      tooltip={props.tooltip}
      label={props.label}
      placeholder={props.placeholder}
      type="text"
      error={error && props.errors[error.type]}
      size={props.size}
      iconType={<InputIcon type={getIconType()}/>}
    />
  );
};

export default InputController;
