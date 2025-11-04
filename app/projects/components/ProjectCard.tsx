import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Flex,
  Link,
  Button,
  Box,
} from '@chakra-ui/react';
import NextImage from 'next/image';

interface Project {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  image?: string;
}

interface ProjectCardProps {
  data: Project;
}

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <Link
      href={data.link}
      _hover={{ textDecoration: 'none' }}
      aria-label={data.title}
      target='_blank'
      rel='noopener noreferrer'
      w='100%'
      h='100%'
      outline={'none'}
    >
      <Card.Root
        overflow='hidden'
        w='100%'
        h='100%'
        className='group'
        border={'none'}
      >
        <Box position='relative' w='100%' pt='100%' overflow='hidden'>
          <Image
            asChild
            alt={data.title}
            transition='transform 0.4s ease, filter 0.4s ease'
            _groupHover={{
              transform: 'scale(1.05)',
            }}
          >
            <NextImage
              src={data.image || '/images/projects/default-project.png'}
              alt={data.title}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Image>
        </Box>

        <CardBody gap={4} p={6} display='flex' flexDirection='column'>
          <Heading
            as='h2'
            fontSize='2xl'
            fontWeight='medium'
            letterSpacing='tighter'
          >
            {data.title}
          </Heading>
          <Text fontWeight='light' letterSpacing='tighter'>
            {data.description}
          </Text>
          {data.tags && (
            <Flex wrap='wrap'>
              <Text fontWeight='medium' fontSize='sm' letterSpacing='tighter'>
                {data.tags.join(' • ')}
              </Text>
            </Flex>
          )}
        </CardBody>

        {/* Optional footer if you want buttons or actions */}
        {/* <CardFooter>
          <Button variant="solid" size="sm">View Project</Button>
        </CardFooter> */}
      </Card.Root>
    </Link>
  );
};

export default ProjectCard;
