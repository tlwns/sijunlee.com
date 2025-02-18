import { Flex, Heading, Text } from '@chakra-ui/react';

interface MainHeaderProps {
  title: string;
  description: string;
}

const MainHeader = ({ title, description }: MainHeaderProps) => {
  return (
    <Flex
      flexDir='column'
      gap={6}
      borderBottomWidth={1.1}
      borderColor={'gray.200'}
      pb={10}
    >
      <Heading
        textTransform={'uppercase'}
        letterSpacing={'widest'}
        fontWeight={'extrabold'}
        as={'h2'}
      >
      ***REMOVED***title}
      </Heading>

      <Text fontWeight={'light'} fontSize={'sm'} letterSpacing={'wider'}>
      ***REMOVED***description}
      </Text>
    </Flex>
  );
};

export default MainHeader;
