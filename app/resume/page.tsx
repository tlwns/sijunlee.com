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

const sections = {
  Education: () => <Education data={education} />,
  Experience: () => <Experience data={experience} />,
  Awards: () => <Awards data={awards} />,
  Skills: () => <Skills data={skills} />,
};

const ResumePage = () => {
  return (
    <MainLayout title='Resume' description="Si Jun Lee's resume. UNSW">
      <Flex flexDir='column' gap={10} w={'100%'}>
        <MainHeader title={'Resume'} />
        <Flex flexDir='column' gap={14} w={'100%'}>
          {Object.entries(sections).map(([key, Section]) => (
            <Section key={key} />
          ))}
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default ResumePage;
