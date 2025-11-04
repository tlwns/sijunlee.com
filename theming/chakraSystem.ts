import { createSystem, defaultConfig } from '@chakra-ui/react';

const chakraSystem = createSystem(defaultConfig, {
  globalCss: {
    body: {
      color: 'gray.fg',
    },
  },
  theme: {
    breakpoints: {
      '3xl': '120em',
    },
    tokens: {
      fonts: {
        heading: { value: `var(--font-inter)` },
        body: { value: `var(--font-inter)` },
      },
    },
  },
});

export default chakraSystem;
