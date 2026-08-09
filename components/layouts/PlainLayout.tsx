'use client';

import { Flex } from '@chakra-ui/react';
import Navbar from '../ui/Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const PlainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex flex={1} role='main' bgColor={'bg.subtle'}>
      <Navbar />
      <Flex flex={1} mt={{ base: 12, md: 16 }} zIndex={1} justify={'center'}>
        {children}
      </Flex>
    </Flex>
  );
};

export default PlainLayout;
