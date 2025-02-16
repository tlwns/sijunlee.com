import { Flex } from '@chakra-ui/react';
import Sidebar from '../components/ui/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex
      flex={1}
      bgColor={'gray.100'}
      px={16}
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      gap={20}
    >
      <Sidebar />
      <Flex
        aria-label='main'
        bg={'gray.50'}
        flex={1}
        my={14}
        height={'fit-content'}
        borderWidth={1.1}
        borderColor={'gray.200'}
        py={12}
        px={10}
      >
      ***REMOVED***children}
      </Flex>
    </Flex>
  );
};

export default MainLayout;
