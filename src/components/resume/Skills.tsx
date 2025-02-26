import { Flex, Heading, Text } from '@chakra-ui/react';

interface SkillsProps {
  data: string[];
}

const Skills = ({ data }: SkillsProps) => {
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
        Skills
      </Heading>
      <Flex
        flexWrap={'wrap'}
        justifyContent={'center'}
        fontSize={'sm'}
        fontWeight={'light'}
        letterSpacing={'wider'}
        gap={4}
      >
        {data.map((skill, index) => (
          <Text key={index}>{skill}</Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Skills;
