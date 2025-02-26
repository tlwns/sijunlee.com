import { Flex, Box, Text, Heading, List } from '@chakra-ui/react';
import TextLink from '../ui/TextLink';

interface Experience {
  company: string;
  link: string;
  position: string;
  date: string;
  description: string[];
}

interface ExperienceProps {
  data: Experience[];
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
      {data.data.map((item, index) => (
        <Box key={index}>
          <Flex
            justifyContent={'space-between'}
            flexDir={{ base: 'column', md: 'row' }}
          >
            <Flex flexDir={'column'} gap={1}>
              <Text letterSpacing={'wider'} fontWeight={'semibold'}>
                <TextLink to={item.link} underline={false}>
                  {item.company}
                </TextLink>
              </Text>
              <Text letterSpacing={'wider'}>{item.position}</Text>
            </Flex>
            <Text
              fontWeight={'light'}
              letterSpacing={'wider'}
              fontSize={{
                base: 'sm',
                md: 'md',
              }}
              mt={{ base: 6, md: 0 }}
            >
              {item.date}
            </Text>
          </Flex>

          <List.Root mt={6} fontWeight={'light'} ml={4} gap={2} fontSize={'sm'}>
            {item.description.map((desc, index) => (
              <List.Item key={index}>{desc}</List.Item>
            ))}
          </List.Root>
        </Box>
      ))}
    </Flex>
  );
};

export default Experience;
