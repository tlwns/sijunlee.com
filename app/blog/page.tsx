import { Flex, GridItem, Grid } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import MainHeader from '@/components/ui/MainHeader';

import entries from './data/entries';
import EntryCard from './components/EntryCard';

const title = 'Blog';
const description =
  'Essays and articles on Philosophy, Theology, and Programming.';
const url = '/blog';

export const metadata = {
  title,
  description,

  alternates: {
    canonical: url,
  },

  openGraph: {
    title,
    description,
    url,
    type: 'website',
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
};

const BlogPage = () => {
  return (
    <MainLayout>
      <Flex
        flexDir='column'
        w={'100%'}
        gap={10}
        py={{ base: 16, md: 24 }}
        px={{ base: 12, md: 18, '2xl': 40 }}
        maxW={{ base: '100%', xl: '90rem' }}
      >
        <MainHeader
          title={'Blog'}
          description='Thoughts on Philosophy, Theology, and Programming.'
        />
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gapX={6}
          gapY={20}
        >
          {entries.map((data, index) => (
            <GridItem
              key={index}
              colSpan={1}
              w={'100%'}
              h={'100%'}
              justifySelf={'center'}
              flex={1}
            >
              <EntryCard data={data} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </MainLayout>
  );
};

export default BlogPage;
