import { FC } from 'react';

import { CheckBoxStyled } from './CheckBox.styles';
import { ICheckBoxProps } from './CheckBox.interface';

const CheckBox: FC<ICheckBoxProps> = ({
  isActive,
  toggleCheckbox,
  isDisabled,
  name
}) => {
  return (
    <CheckBoxStyled>
      <input
        type="checkbox"
        checked={isActive}
        onChange={toggleCheckbox}
        disabled={isDisabled}
        name={name}
      />
      <span />
    </CheckBoxStyled>
  );
};

export default CheckBox;
