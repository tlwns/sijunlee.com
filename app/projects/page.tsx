import CardsLayout from '@/components/layouts/CardsLayout';
import MainHeader from '@/components/ui/MainHeader';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import ProjectCard from './components/ProjectCard';
import projects from './data/projects';

const ProjectsPage = () => {
  return (
    <CardsLayout>
      <Flex flexDir='column' gap={24} w={'100%'}>
        <MainHeader title={'Projects'} />
        <Grid templateColumns='repeat(2, 1fr)' gap={6} alignItems='stretch'>
          {projects.map((data, index) => (
            <GridItem key={index} colSpan={1}>
              <ProjectCard data={data} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </CardsLayout>
  );
};

export default ProjectsPage;
