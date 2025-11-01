import { Flex } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import MainHeader from '@/components/ui/MainHeader';

const AboutPage = () => {
  return (
    <MainLayout>
      <Flex flexDir='column' gap={10} w={'100%'}>
        <MainHeader title={'About me'} description={'WIP'} />
      </Flex>
    </MainLayout>
  );
};

export default AboutPage;
