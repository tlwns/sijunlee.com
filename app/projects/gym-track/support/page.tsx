import { Flex } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import MainHeader from '@/components/ui/MainHeader';
import Faq from './components/Faq';
import faq from './data/faq';
const sections = {
  Faq: () => <Faq data={faq} />,
};
const SupportPage = () => {
  return (
    <MainLayout>
      <Flex flexDir='column' gap={10} w={'100%'}>
        <MainHeader title='GymTrack – Support' />
        <Flex flexDir='column' gap={14} w={'100%'}>
          {Object.entries(sections).map(([key, Section]) => (
            <Section key={key} />
          ))}
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default SupportPage;
