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
      <Heading
        textTransform={'uppercase'}
        letterSpacing={'widest'}
        fontWeight={'extrabold'}
        as={'h2'}
        fontSize={'2xl'}
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
