import { Text, Flex } from '@chakra-ui/react';
import MainLayout from '../layouts/MainLayout';
import MainHeader from '../components/ui/MainHeader';
import TextLink from '../components/ui/TextLink';

const HomePage = () => {
  return (
    <MainLayout description="Si Jun Lee's personal website. Computer Science and Philosophy student at the University of New South Wales, Sydney. Casual academic (Tutor) at the School of Computer Science and Engineering, UNSW.">
      <Flex flexDir='column' gap={10} w={'100%'}>
        <MainHeader
          title={'About this site'}
          description={
            'A simple, responsive, statically generated, and accessible personal website built with React, TypeScript, and Chakra UI.'
          }
        />
        <Flex flexDir='column' gap={6}>
          <Text fontSize={'sm'}>
            Welcome to my website! Please feel free to learn more&nbsp;
            <TextLink to={'/about'}>about me</TextLink>, check out my{' '}
            <TextLink to={'/resume'}>resume</TextLink>, and&nbsp;
            <TextLink to={'/projects'}>projects</TextLink>, or dive into my{' '}
            <TextLink to={'/blog'}>blog</TextLink> where I discuss coding and
            philosophy. You can also view the site{' '}
            <TextLink to={'/statistics'}>statistics</TextLink>, or{' '}
            <TextLink to={'/contact'}>get in touch</TextLink>.
          </Text>

          <Text fontSize={'sm'}>
            <TextLink to={'https://github.com/tlwns/personal-website'}>
              View source code
            </TextLink>
            .
          </Text>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default HomePage;
