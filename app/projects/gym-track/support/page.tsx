import { Flex } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import MainHeader from '@/components/ui/MainHeader';
import Faq from './components/Faq';
import faq from './data/faq';

const title = 'GymTrack Support';
const description = 'Get answers to frequently asked questions about GymTrack.';
const url = '/projects/gym-track/support';

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
  Faq: () => <Faq data={faq} />,
};

const SupportPage = () => {
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
          align={'center'}
          px={{ base: 12, md: 48, lg: 180, xl: 240, '2xl': 480 }}
        >
          {Object.entries(sections).map(([key, Section]) => (
            <Section key={key} />
          ))}
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default SupportPage;
