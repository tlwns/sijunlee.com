import { Flex } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import MainHeader from '@/components/ui/MainHeader';
import privacy from './data/privacy';
import PrivacyPolicy from './components/PrivacyPolicy';

const sections = {
  PrivacyPolicy: () => <PrivacyPolicy data={privacy} />,
};

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <Flex flexDir='column' gap={10} w={'100%'}>
        <MainHeader title='GymTrack' />
        <Flex flexDir='column' gap={14} w={'100%'}>
          {Object.entries(sections).map(([key, Section]) => (
            <Section key={key} />
          ))}
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default PrivacyPolicyPage;
