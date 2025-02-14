import { Flex } from '@chakra-ui/react';
import Sidebar from '../components/ui/Sidebar';

const MainLayout = () => {
  return (
    <Flex flex={1} bgColor={'gray.100'} flexDir={'column'}>
      <Sidebar />
      <Flex></Flex>
    </Flex>
  );
};

export default MainLayout;
