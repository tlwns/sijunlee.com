import { Flex, Box } from '@chakra-ui/react';
import { ColorModeButton } from './ColorMode';
import NavLink from './NavLink';

import routes from '../../data/routes';

const Navbar = () => {
  return (
    <Flex
      w='100%'
      bg={'gray.50'}
      align={'center'}
      justify={'space-between'}
      borderBottomColor={'gray.200'}
      borderBottomWidth={1.1}
      height={14}
      position={'fixed'}
      px={8}
    >
      <Flex
        justify={'flex-start'}
        align={'center'}
        gap={8}
        letterSpacing={'wide'}
      >
      ***REMOVED***/* Homepage */}

      ***REMOVED***routes
          .filter((route) => route.index)
          .map((route) => (
            <Box key={route.path} fontWeight={'medium'}>
              <NavLink path={route.path} label={route.label} />
            </Box>
          ))}

      ***REMOVED***/* Other pages */}
      ***REMOVED***routes
          .filter((route) => !route.index)
          .map((route) => (
            <Box key={route.path}>
              <NavLink path={route.path} label={route.label} />
            </Box>
          ))}
      </Flex>
      <ColorModeButton />
    </Flex>
  );
};

export default Navbar;
