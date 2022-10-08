import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { WithChildren } from '@/types';

export const AppProvider = ({ children }: WithChildren) => (
  <ChakraProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </ChakraProvider>
);
