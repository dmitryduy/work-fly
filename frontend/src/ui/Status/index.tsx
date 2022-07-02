import {FC} from 'react';

import {StatusIconStyled, StatusStyled} from './Status.styles';
import {IStatusProps} from './Status.typings';

const Label: FC<IStatusProps> = ({children, statusColor }) => {
  return (
    <StatusStyled>
      <StatusIconStyled statusColor={statusColor} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="6"/>
      </StatusIconStyled>
      {children}
    </StatusStyled>
  );
};

export default Label;
