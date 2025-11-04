import { Flex, Box, Text } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import NavLink from '@/components/ui/NavLink';

import routes from '@/data/routes';

const Navbar = () => {
  return (
    <Flex
      w='100%'
      bg={'bg.subtle'}
      align={'center'}
      justify={'center'}
      borderBottomColor={'border'}
      borderBottomWidth={1.1}
      height={20}
      position={'fixed'}
      px={8}
      zIndex={1}
    >
      <Flex justify={'space-between'} maxW={'90rem'} flex={1}>
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
                <Text
                  fontWeight={'bold'}
                  fontSize={'3xl'}
                  letterSpacing={'tighter'}
                >
                  <NavLink path={route.path} label={route.label} />
                </Text>
              </Box>
            ))}

          {/* Other pages */}
        </Flex>{' '}
        <Flex
          justify={'flex-start'}
          align={'center'}
          gap={8}
          letterSpacing={'wide'}
          // stop text from wrapping
          whiteSpace={'nowrap'}
        >
          {routes
            .filter((route) => !route.index)
            .map((route) => (
              <Box key={route.path} fontWeight={'light'}>
                <Text
                  fontWeight={'medium'}
                  fontSize={'xl'}
                  letterSpacing={'tighter'}
                >
                  <NavLink path={route.path} label={route.label} />
                </Text>
              </Box>
            ))}
        </Flex>
        <ColorModeButton />
      </Flex>
    </Flex>
  );
};

export default Navbar;
