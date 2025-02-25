import { Flex, Box, Text, Heading, List } from '@chakra-ui/react';
import TextLink from '../ui/TextLink';

interface Experience {
  company: string;
  link: string;
  position: string;
  date: string;
  description: string[***REMOVED***
}

interface ExperienceProps {
  data: Experience[***REMOVED***
}

const Experience = (data: ExperienceProps) => {
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
        Experience
      </Heading>
    ***REMOVED***data.data.map((item, index) => (
        <Box key={index}>
          <Flex justifyContent={'space-between'}>
            <Text letterSpacing={'wider'} fontWeight={'semibold'}>
              <TextLink to={item.link} underline={false}>
              ***REMOVED***item.company}
              </TextLink>
            </Text>
            <Text fontWeight={'light'} letterSpacing={'wider'}>
            ***REMOVED***item.date}
            </Text>
          </Flex>
          <Text letterSpacing={'wider'}>{item.position}</Text>

          <List.Root mt={6} fontWeight={'light'} ml={4} gap={2} fontSize={'sm'}>
          ***REMOVED***item.description.map((desc, index) => (
              <List.Item key={index}>{desc}</List.Item>
            ))}
          </List.Root>
        </Box>
      ))}
    </Flex>
  );
};

export default Experience;
