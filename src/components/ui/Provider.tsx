'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './ColorMode';
import chakraSystem from '../../theming/chakraSystem';

const Provider = (props: ColorModeProviderProps) => {
  return (
    <ChakraProvider value={chakraSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
};

export default Provider;
