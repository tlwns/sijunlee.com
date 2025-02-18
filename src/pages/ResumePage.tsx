import { Flex } from '@chakra-ui/react';
import MainLayout from '../layouts/MainLayout';
import MainHeader from '../components/ui/MainHeader';

const ResumePage = () => {
  return (
    <MainLayout>
      <Flex flexDir='column' gap={10} w={'100%'}>
        <MainHeader title={'Resume'} description='' />
      </Flex>
    </MainLayout>
  );
};

export default ResumePage;
