import { Flex } from '@chakra-ui/react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex
      flex={1}
      bg={'bg.subtle'}
      px={{ base: 6, lg: 16, '2xl': 80 }}
      role='main'
    >
      {children}
    </Flex>
  );
};

export default MainLayout;
