import { Outlet } from 'react-router';
import { Flex } from '@chakra-ui/react';
import Navbar from '../components/ui/Navbar';

const RootLayout = () => {
  return (
    <Flex dir='column' minHeight='100svh'>
      <Navbar />
      <Flex flex={1} mt={14}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default RootLayout;
