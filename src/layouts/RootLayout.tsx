import { Outlet } from 'react-router';
import { Flex } from '@chakra-ui/react';
import Navbar from '../components/ui/Navbar';

const RootLayout = () => {
  return (
    <Flex
      dir='column'
      minHeight='100svh'
      bgColor={'bg.muted'}
      justify={'center'}
    >
      <Navbar />
      <Flex flex={1} mt={14} maxW={'90rem'}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default RootLayout;
