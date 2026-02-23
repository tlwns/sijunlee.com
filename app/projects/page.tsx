import MainHeader from '@/components/ui/MainHeader';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import ProjectCard from './components/ProjectCard';
import projects from './data/projects';
import MainLayout from '@/components/layouts/MainLayout';
import { Metadata } from 'next';

const title = 'Projects';
const description =
  'A showcase of projects by Si Jun Lee, Full Stack Software Developer.';
const url = '/projects';
export const metadata: Metadata = {
  title,
  description,

  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url,
    title,
    description,
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },

  alternates: {
    canonical: url,
  },
};

const ProjectsPage = () => {
  return (
    <MainLayout>
      <Flex
        flexDir='column'
        w={'100%'}
        gap={{ base: 6, md: 8 }}
        py={{ base: 10, md: 16 }}
        px={{ base: 6, md: 10, lg: 16, xl: 24 }}
        maxW={{ base: '100%', xl: '75rem' }}
        mx='auto'
      >
        <MainHeader title={'Projects'} />
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gapX={{ base: 6, lg: 10 }}
          gapY={{ base: 10, md: 14 }}
          alignItems='stretch'
        >
          {projects.map((data, index) => (
            <GridItem
              key={index}
              colSpan={1}
              maxW={{ base: '100%', md: '26rem', lg: '28rem' }}
              w={'100%'}
              h={'100%'}
              justifySelf={'center'}
              flex={1}
            >
              <ProjectCard data={data} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </MainLayout>
  );
};

export default ProjectsPage;
