import { AspectRatio, Box, Flex, Heading, Image } from '@chakra-ui/react';
import { notFound } from 'next/navigation';
import PlainLayout from '@/components/layouts/PlainLayout';
import NextImage from 'next/image';
import entries from '../data/entries';
import { Prose } from '@/components/ui/prose';
import Markdown from 'react-markdown';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const entry = entries.find((entry) => entry.slug === slug);
  if (!entry) {
    return {};
  }

  const { metadata } = await import(`../data/content/${slug}.mdx`);
  return metadata;
}

export async function generateStaticParams() {
  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export const dynamicParams = false;

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const entry = entries.find((entry) => entry.slug === slug);
  if (!entry) {
    notFound();
  }
  const { default: Post } = await import(`../data/content/${slug}.mdx`);

  return (
    <PlainLayout>
      <Flex
        flexDir='column'
        gap={10}
        w={'100%'}
        minH={{ base: 'calc(100svh - 5rem)', md: 'calc(100svh - 4rem)' }}
      >
        <Flex
          flexDir={{
            base: 'column',
            md: 'row',
          }}
          w={'100%'}
          h={{ base: 'auto', md: 500 }}
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
                <Prose>
                  <Markdown>{entry.description}</Markdown>
                </Prose>
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
        <Flex
          justify={'center'}
          w={'100%'}
          px={{ base: 4, sm: 6, md: 8 }}
          pb={{ base: 8, md: 12 }}
        >
          <Box
            w={'100%'}
            maxW={{
              base: '100%',
              md: '45rem', // ~720px - optimal reading width
              lg: '50rem', // ~800px
            }}
          >
            <Post />
          </Box>
        </Flex>
      </Flex>
    </PlainLayout>
  );
};
export default BlogPostPage;
