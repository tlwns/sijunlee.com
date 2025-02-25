import { Flex } from '@chakra-ui/react';
import MainLayout from '../layouts/MainLayout';
import MainHeader from '../components/ui/MainHeader';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Awards from '../components/Resume/Awards';
import Skills from '../components/Resume/Skills';

import education from '../data/resume/education';
import experience from '../data/resume/experience';
import awards from '../data/resume/awards';
import skills from '../data/resume/skills';

const sections = {
  Education: () => <Education data={education} />,
  Experience: () => <Experience data={experience} />,
  Awards: () => <Awards data={awards} />,
  Skills: () => <Skills data={skills} />,
};

const ResumePage = () => {
  return (
    <MainLayout>
      <Flex flexDir='column' gap={10} w={'100%'}>
        <MainHeader title={'Resume'} />
        <Flex flexDir='column' gap={14} w={'100%'}>
        ***REMOVED***Object.entries(sections).map(([key, Section]) => (
            <Section key={key} />
          ))}
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default ResumePage;
