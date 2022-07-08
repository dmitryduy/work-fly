import { ReactNode } from 'react';

export interface IBackgroundImage {
  type: 'register' | 'login'
}

export interface IAuthLayoutProps extends IBackgroundImage {
  children: ReactNode
}

