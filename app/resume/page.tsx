import { Flex } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import MainHeader from '@/components/ui/MainHeader';

import Education from './components/Education';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Skills from './components/Skills';

import education from './data/education';
import experience from './data/experience';
import awards from './data/awards';
import skills from './data/skills';

const title = 'Resume';
const description = "View Si Jun Lee's Resume — Full Stack Software Developer";
const url = '/resume';

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
  Education: () => <Education data={education} />,
  Experience: () => <Experience data={experience} />,
  Awards: () => <Awards data={awards} />,
  Skills: () => <Skills data={skills} />,
};

const ResumePage = () => {
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
        <MainHeader title={'Resume'} />
        <Flex
          flexDir='column'
          gap={14}
          w={'100%'}
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

export default ResumePage;
