import CardsLayout from '@/components/layouts/CardsLayout';
import MainHeader from '@/components/ui/MainHeader';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import ProjectCard from './components/ProjectCard';
import projects from './data/projects';
import MainLayout from '@/components/layouts/MainLayout';

const ProjectsPage = () => {
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
        <MainHeader title={'Projects'} />
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gapX={6}
          gapY={20}
          alignItems='stretch'
        >
          {projects.map((data, index) => (
            <GridItem
              key={index}
              colSpan={1}
              maxW='30rem'
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
