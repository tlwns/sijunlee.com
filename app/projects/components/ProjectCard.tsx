import { Text, Flex, Heading, Image, AspectRatio } from '@chakra-ui/react';
import NextImage from 'next/image';

interface Project {
  title: string;
  description: string;
}

interface ProjectCardProps {
  data: Project;
}

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <Flex
      direction='column'
      borderWidth={1.1}
      borderColor={'border'}
      position={'relative'}
      overflow={'hidden'}
    >
      <AspectRatio ratio={1 / 1}>
        <Image
          asChild
          fit={'cover'}
          objectPosition={'left middle'}
          alt={'Si Jun Lee'}
        >
          <NextImage
            src={'/images/profile.webp'}
            alt={'Si Jun Lee'}
            width={2268}
            height={2578}
          />
        </Image>
      </AspectRatio>
      <Flex
        direction='column'
        gap={4}
        p={6}
        position={'absolute'}
        bottom={0}
        left={0}
        color={'gray.50'}
      >
        <Heading as='h2'>{data.title}</Heading>
        <Text>{data.description}</Text>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
