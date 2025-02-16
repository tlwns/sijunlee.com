import { Heading, Text, Flex } from '@chakra-ui/react';
import MainLayout from '../layouts/MainLayout';
import TextLink from '../components/ui/TextLink';

const HomePage = () => {
  return (
    <MainLayout>
      <Flex flexDir='column' gap={10}>
        <Flex
          flexDir='column'
          gap={6}
          borderBottomWidth={1.1}
          borderColor={'gray.200'}
          pb={10}
        >
          <Heading
            textTransform={'uppercase'}
            letterSpacing={'widest'}
            fontWeight={'extrabold'}
            as={'h2'}
          >
            About this site
          </Heading>

          <Text fontWeight={'light'} fontSize={'sm'} letterSpacing={'wider'}>
            A simple, responsive, statically generated, and accessible personal
            website built with React, TypeScript, and Chakra UI.
          </Text>
        </Flex>

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
            Source code available&nbsp;
            <TextLink to={'https://github.com/tlwns/personal-website'}>
              here
            </TextLink>
            .
          </Text>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default HomePage;
