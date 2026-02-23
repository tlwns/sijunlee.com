import { Text, Flex, Heading, Image } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import TextLink from '@/components/ui/TextLink';
import NextImage from 'next/image';
import ContactIcons from '@/components/ui/ContactIcons';

const HomePage = () => {
  return (
    <MainLayout>
      <Flex
        flexDir='column'
        gap={{ base: 8, md: 10, '2xl': 12 }}
        justify={'space-between'}
        w={'100%'}
        minH={'calc(100svh - 5rem)'}
        py={{ base: 12, md: 16, lg: 8, xl: 12, '2xl': 24 }}
        px={{ base: 12, md: 20, lg: 32, xl: 48, '2xl': 80 }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={'space-between'}
          align={'flex-start'}
          gap={{ base: 8, md: 12, '2xl': 16 }}
        >
          <Heading
            fontWeight={'bold'}
            as={'h1'}
            fontSize={{
              base: '5rem',
              sm: '6rem',
              md: '7rem',
              lg: '7rem',
              xl: '8rem',
              '2xl': '10rem',
            }}
            whiteSpace='pre-line'
            lineHeight={1}
            letterSpacing={'tighter'}
          >
            {`SI JUN\n LEE`}
          </Heading>
          <Image
            alignSelf={{ base: 'flex-end', md: 'flex-start' }}
            asChild
            boxSize={{
              base: '120px',
              md: '140px',
              lg: '140px',
              xl: '160px',
              '2xl': '200px',
            }}
            fit={'cover'}
            borderRadius={'full'}
            objectPosition={'left bottom'}
            alt={'Si Jun Lee'}
          >
            <NextImage
              src={'/images/profile.webp'}
              alt={'Si Jun Lee'}
              width={2268}
              height={2578}
            />
          </Image>
        </Flex>

        <Flex
          justify={'space-between'}
          direction={{ base: 'column', md: 'row' }}
          gap={8}
        >
          <ContactIcons />
          <Flex
            flexDir='column'
            gap={6}
            maxW={{ base: 'full', md: '40%', lg: '50%', xl: '60%' }}
          >
            <Text
              fontSize={{
                base: 'lg',
                md: 'xl',
                lg: 'xl',
                xl: '2xl',
                '2xl': '4xl',
              }}
              fontWeight={'medium'}
              letterSpacing={'tighter'}
            >
              Welcome to my website! Learn more&nbsp;
              <TextLink to={'/about'}>about me</TextLink>, check out my{' '}
              <TextLink to={'/resume'}>resume</TextLink> and&nbsp;
              <TextLink to={'/projects'}>projects</TextLink>, or dive into my{' '}
              <TextLink to={'/blog'}>blog</TextLink> where I discuss coding and
              philosophy. You can also view the site{' '}
              <TextLink to={'/statistics'}>statistics</TextLink>, or{' '}
              <TextLink to={'/contact'}>get in touch</TextLink>.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default HomePage;
