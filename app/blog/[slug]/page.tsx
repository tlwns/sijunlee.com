import { AspectRatio, Box, Flex, Heading, Image } from '@chakra-ui/react';
import { notFound } from 'next/navigation';
import PlainLayout from '@/components/layouts/PlainLayout';
import NextImage from 'next/image';
import entries from '../data/entries';
import ReactMarkdown from 'react-markdown';
import { Prose } from '@/components/ui/prose';
import { promises as fs } from 'fs';
import path from 'path';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;

  const entry = entries.find((entry) => entry.slug === slug);
  if (!entry) {
    notFound();
  }

  return (
    <PlainLayout>
      <Flex flexDir='column' gap={10} w={'100%'} minH={'calc(100svh - 5rem)'}>
        <Flex
          flexDir={{
            base: 'column',
            md: 'row',
          }}
          w={'100%'}
          h={500}
        >
          {/* Header row */}
          <Flex
            flexDir='row'
            w={{
              base: '100%',
              md: '50%',
            }}
            h='full'
            justify={'flex-end'}
          >
            <Flex
              justify={'center'}
              py={{
                base: 10,
                md: 0,
              }}
              px={{ base: 6, md: 12 }}
              flexDir='column'
              gap={12}
            >
              <Heading
                as={'h1'}
                letterSpacing={{
                  base: 'tight',
                  md: 'tighter',
                }}
                fontSize={{ base: '3xl', md: '4xl' }}
              >
                {entry.title}
              </Heading>
              <Heading
                as={'h2'}
                letterSpacing={{
                  base: 'tight',
                  md: 'tighter',
                }}
                fontSize={{ base: 'lg', md: '2xl' }}
              >
                {entry.description}
              </Heading>
            </Flex>
          </Flex>

          <Box
            w={{
              base: '100%',
              md: '50%',
            }}
            h='full'
          >
            <AspectRatio ratio={16 / 9} w='full' h='full'>
              <Image asChild alt={entry.title}>
                <NextImage
                  src={entry.image || '/images/projects/default-project.png'}
                  alt={entry.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Image>
            </AspectRatio>
          </Box>
        </Flex>
      </Flex>
    </PlainLayout>
  );
};
export default BlogPostPage;
