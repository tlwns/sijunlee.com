import { Flex } from '@chakra-ui/react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex flex={1} bg={'bg.subtle'} role='main'>
      {children}
    </Flex>
  );
};

export default MainLayout;
