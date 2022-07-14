import {ReactNode} from 'react';

export interface IStatusIconStyledProps {
  statusColor: string;
}

export interface IStatusProps {
  children: ReactNode;
  statusColor: string;
}
