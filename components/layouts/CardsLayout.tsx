import { Flex } from '@chakra-ui/react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const CardsLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex
      aria-label='main'
      role='main'
      flex={1}
      my={14}
      height={'fit-content'}
      py={12}
      justify='center'
      px={{ base: 6, lg: 16 }}
    >
      {children}
    </Flex>
  );
};

export default CardsLayout;
