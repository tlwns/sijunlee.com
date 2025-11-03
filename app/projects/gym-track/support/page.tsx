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

export default SupportPage;
