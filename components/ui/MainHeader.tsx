import { Flex, Heading, Text } from '@chakra-ui/react';

interface MainHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const MainHeader = ({ title, description, children }: MainHeaderProps) => {
  return (
    <Flex flexDir='column' gap={16} pb={24}>
      <Heading
        fontWeight={'bold'}
        as={'h1'}
        fontSize={{ base: '4xl', md: '5xl', xl: '7xl' }}
        letterSpacing={'tighter'}
        textAlign={'center'}
      >
        {title}
      </Heading>
      {description && (
        <Text
          fontWeight={'light'}
          fontSize={'lg'}
          letterSpacing={'wider'}
          textAlign={'center'}
        >
          {description}
        </Text>
      )}

      {children}
    </Flex>
  );
};

export default MainHeader;
