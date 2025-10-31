import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import TextLink from '@/components/ui/TextLink';

interface Education {
  school: string;
  degree: string;
  date: string;
  link: string;
}

interface EducationProps {
  data: Education[];
}

const Education = ({ data }: EducationProps) => {
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
        Education
      </Heading>
      {data.map((item, index) => (
        <Box key={index}>
          <Text letterSpacing={'wider'} fontWeight={'semibold'}>
            {item.degree}
          </Text>
          <Text fontWeight={'light'} fontSize={'sm'}>
            <TextLink to={item.link}>{item.school}</TextLink>, {item.date}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Education;
