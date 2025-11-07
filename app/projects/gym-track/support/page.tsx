import { Flex, Heading } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import MainHeader from '@/components/ui/MainHeader';
import Faq from './components/Faq';
import faq from './data/faq';
import ContactForm from '@/components/ui/ContactForm';

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
        minH={'calc(100svh - 5rem)'}
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
        <Flex flexDir='column' align={'center'} mt={'10'} gap={20}>
          <Heading
            fontWeight={'bold'}
            as={'h2'}
            fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
            letterSpacing={'tighter'}
            textAlign={'center'}
          >
            Contact Support
          </Heading>
          <ContactForm />
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default SupportPage;
