'use client';
import { Flex, Box, Text, IconButton, Heading } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import { Menu } from 'lucide-react';
import NavLink from '@/components/ui/NavLink';
import routes from '@/data/routes';
import TextLink from './TextLink';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
const MotionBox = motion.create(Box);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
        zIndex={2}
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
                <Box
                  key={route.path}
                  onClick={() => {
                    if (isOpen) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <Text
                    fontWeight={'bold'}
                    fontSize={'3xl'}
                    letterSpacing={'tighter'}
                  >
                    <NavLink path={route.path} label={route.label} />
                  </Text>
                </Box>
              ))}
          </Flex>

          {/* Desktop Navigation */}
          <Flex
            justify={'flex-start'}
            display={{ base: 'none', md: 'flex' }}
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
          <Flex align='center' gap={4}>
            <ColorModeButton />
            <IconButton
              aria-label='Open menu'
              variant='outline'
              border={'none'}
              display={{ base: 'flex', md: 'none' }}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Menu />
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
      {/* Mobile Navigation Drawer */}

      <AnimatePresence>
        {isOpen && (
          <MotionBox
            exit={{ y: '-100%' }}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            position={'absolute'}
            justifyContent={'center'}
            alignItems={'center'}
            display={{ base: 'flex', md: 'none' }}
            gap={20}
            flexDir={'column'}
            top={20}
            minH={'calc(100vh - 5rem)'}
            w='100%'
            bg={'bg.subtle'}
            transition={{ duration: 1.2, ease: [0.42, 0.21, 0, 1] }}
            zIndex={1}
          >
            {routes
              .filter((route) => !route.index)
              .map((route) => (
                <Box
                  key={route.path}
                  onClick={() => {
                    if (isOpen) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <TextLink key={route.path} to={route.path} underline={false}>
                    <Heading fontSize={'4xl'} letterSpacing={'tighter'}>
                      {route.label}
                    </Heading>
                  </TextLink>
                </Box>
              ))}
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
