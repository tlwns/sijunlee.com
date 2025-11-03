import { Flex, Box } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import NavLink from '@/components/ui/NavLink';

import routes from '@/data/routes';

const Navbar = () => {
  return (
    <Flex
      w='100%'
      bg={'bg.subtle'}
      align={'center'}
      justify={'space-between'}
      borderBottomColor={'border'}
      borderBottomWidth={1.1}
      height={14}
      position={'fixed'}
      px={8}
      zIndex={1}
    >
      <Flex
        justify={'flex-start'}
        align={'center'}
        gap={8}
        letterSpacing={'wide'}
        // stop text from wrapping
        whiteSpace={'nowrap'}
      >
        {/* Homepage */}
        {routes
          .filter((route) => route.index)
          .map((route) => (
            <Box key={route.path}>
              <NavLink path={route.path} label={route.label} />
            </Box>
          ))}

        {/* Other pages */}
        {routes
          .filter((route) => !route.index)
          .map((route) => (
            <Box key={route.path} fontWeight={'light'}>
              <NavLink path={route.path} label={route.label} />
            </Box>
          ))}
      </Flex>
      <ColorModeButton />
    </Flex>
  );
};

export default Navbar;
