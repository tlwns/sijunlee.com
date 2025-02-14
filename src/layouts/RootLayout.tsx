import { Outlet } from 'react-router';
import { Flex } from '@chakra-ui/react';
import Navbar from '../components/ui/Navbar';

const RootLayout = () => {
  return (
    <Flex dir='column' height='100svh'>
      <Navbar />
      <Flex flex={1}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default RootLayout;
