import { BrowserRouter } from 'react-router-dom';

import { WithChildren } from '@/types';

export const AppProvider = ({ children }: WithChildren) => (
  <BrowserRouter>{children}</BrowserRouter>
);
