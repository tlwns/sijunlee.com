import { Flex } from '@chakra-ui/react';
import MainLayout from '../layouts/MainLayout';
import MainHeader from '../components/ui/MainHeader';

const AboutPage = () => {
  return (
    <MainLayout title={'About me'} description={'Learn about Si Jun Lee.'}>
      <Flex flexDir='column' gap={10} w={'100%'}>
        <MainHeader title={'About me'} description={'WIP'} />
      </Flex>
    </MainLayout>
  );
};

export default AboutPage;
