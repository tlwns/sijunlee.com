import { Flex } from '@chakra-ui/react';
import Sidebar from '@/components/ui/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex
      flex={1}
      px={{ base: 6, lg: 16 }}
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      gap={20}
    >
      <Sidebar />
      <Flex
        aria-label='main'
        bg={'bg.subtle'}
        flex={1}
        my={14}
        height={'fit-content'}
        borderWidth={1.1}
        borderColor={'border'}
        py={12}
        px={10}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default MainLayout;
