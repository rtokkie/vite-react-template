import { ReactNode } from 'react';

export type WithChildren<T = Record<string, never>> = {
  children: ReactNode;
} & T;
