import { Flex } from '@chakra-ui/react';
import MainLayout from '../../layouts/MainLayout';
import MainHeader from '../../components/ui/MainHeader';
import privacy from '../../data/gym-track/privacy';
import PrivacyPolicy from '../../components/gym-track/PrivacyPolicy';

const sections = {
  PrivacyPolicy: () => <PrivacyPolicy data={privacy} />,
};

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <Flex flexDir='column' gap={10} w={'100%'}>
        <MainHeader title='GymTrack – Privacy Policy' />
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
