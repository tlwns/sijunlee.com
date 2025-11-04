import { Flex, Heading, Text } from '@chakra-ui/react';

interface MainHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const MainHeader = ({ title, description, children }: MainHeaderProps) => {
  return (
    <Flex
      flexDir='column'
      gap={6}
      borderBottomWidth={1.1}
      borderColor={'border'}
      pb={10}
    >
      <Heading fontWeight={'bold'} as={'h1'} fontSize={'8xl'}>
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
