import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Link,
  AspectRatio,
} from '@chakra-ui/react';
import NextImage from 'next/image';

interface Entry {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
  image?: string;
}

interface EntryCardProps {
  data: Entry;
}

const EntryCard = ({ data }: EntryCardProps) => {
  return (
    <Link
      href={`/blog/${data.slug}`}
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
        bg={'none'}
        border={'none'}
      >
        <AspectRatio ratio={16 / 9} borderBottomRadius={'sm'} overflow='hidden'>
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
        </AspectRatio>

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
        </CardBody>
      </Card.Root>
    </Link>
  );
};

export default EntryCard;
