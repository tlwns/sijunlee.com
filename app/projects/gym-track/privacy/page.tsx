import { Flex } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import MainHeader from '@/components/ui/MainHeader';
import privacy from './data/privacy';
import PrivacyPolicy from './components/PrivacyPolicy';

const title = 'GymTrack Privacy Policy';
const description = 'Understand how GymTrack handles your data and privacy.';
const url = '/projects/gym-track/privacy';

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

const sections = {
  PrivacyPolicy: () => <PrivacyPolicy data={privacy} />,
};

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <Flex
        flexDir='column'
        gap={10}
        w={'100%'}
        minH={'calc(100vh - 5rem)'}
        py={{ base: 16, md: 24 }}
        px={{ base: 12, md: 18, '2xl': 40 }}
      >
        <MainHeader title={'GymTrack'} />
        <Flex
          flexDir='column'
          gap={14}
          w={'100%'}
          px={{ base: 12, md: 48, lg: 180, xl: 240, '2xl': 480 }}
        >
          <Flex flexDir='column' gap={14} w={'100%'} align={'center'}>
            {Object.entries(sections).map(([key, Section]) => (
              <Section key={key} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default PrivacyPolicyPage;
