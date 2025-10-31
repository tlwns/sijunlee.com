import { createSystem, defaultConfig } from '@chakra-ui/react';

const chakraSystem = createSystem(defaultConfig, {
  globalCss: {
    body: {
      color: 'gray.fg',
    },
  },
});

export default chakraSystem;
