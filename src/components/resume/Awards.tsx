import { Flex, Heading, Box, Text, List } from '@chakra-ui/react';

interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}

interface AwardsProps {
  data: Award[***REMOVED***
}

const Awards = ({ data }: AwardsProps) => {
  return (
    <Flex flexDir='column' gap={8}>
      <Heading
        textAlign={'center'}
        as={'h3'}
        textTransform={'uppercase'}
        letterSpacing={'wider'}
        mb={4}
        fontSize={'lg'}
      >
        Awards
      </Heading>
    ***REMOVED***data.map((item, index) => (
        <Box key={index}>
          <Text letterSpacing={'wider'} fontWeight={'semibold'}>
          ***REMOVED***item.title}
          </Text>
          <Text fontWeight={'light'} fontSize={'sm'}>
          ***REMOVED***item.organization}, {item.date}
          </Text>
          <List.Root>
            <List.Item fontWeight={'light'} fontSize={'sm'} mt={2} ml={4}>
            ***REMOVED***item.description}
            </List.Item>
          </List.Root>
        </Box>
      ))}
    </Flex>
  );
};

export default Awards;
