import styled from 'styled-components';

import {IStatusIconStyledProps} from '../Status.typings';

export const StatusStyled = styled.div`
  ${({ theme }) => theme.typography.buttonXSmall};
  display: flex;
  width: 72px;
  height: 32px;
  gap: 8px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 20px;
`;

export const StatusIconStyled = styled.svg<IStatusIconStyledProps>`
  fill: ${props => props.statusColor};
`;
