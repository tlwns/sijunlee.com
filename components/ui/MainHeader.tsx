import { Flex, Heading, Text } from '@chakra-ui/react';

interface MainHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const MainHeader = ({ title, description, children }: MainHeaderProps) => {
  return (
    <Flex flexDir='column' gap={6} pb={24}>
      <Heading
        fontWeight={'bold'}
        as={'h1'}
        fontSize={{ base: '4xl', md: '5xl', lg: '7xl' }}
        letterSpacing={'tighter'}
        textAlign={'center'}
      >
        {title}
      </Heading>
      {description && (
        <Text fontWeight={'light'} fontSize={'sm'} letterSpacing={'wider'}>
          {description}
        </Text>
      )}

      {children}
    </Flex>
  );
};

export default MainHeader;
