'use client';

import { Button, Flex, Text, Image } from '@chakra-ui/react';
import ContactIcons from './ContactIcons';
import NextLink from 'next/link';
import TextLink from './TextLink';
import { usePathname } from 'next/dist/client/components/navigation';
import NextImage from 'next/image';

const Sidebar = () => {
  const pathname = usePathname();
  const isResumePage = pathname === '/resume';

  return (
    <Flex
      flexDir='column'
      alignItems={{ base: 'center', lg: 'flex-start' }}
      width={{ base: '100%', lg: '20%' }}
    >
      <Flex
        flexDir='column'
        py={14}
        borderBottomWidth={1.1}
        borderBottomColor={'border.emphasized'}
        gap={8}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        width='100%'
      >
        {/* Headers */}
        <Image
          asChild
          boxSize={'32'}
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
        <Text fontWeight={'bold'} fontSize={'2xl'} letterSpacing={'widest'}>
          SI JUN&nbsp;&nbsp;LEE
        </Text>
      </Flex>

      <Flex
        flexDir='column'
        borderBottomWidth={1.1}
        borderBottomColor={'border.emphasized'}
        py={10}
        gap={8}
        width='100%'
      >
        {/* About me block */}
        <Text letterSpacing={'widest'} fontWeight={'semibold'}>
          ABOUT
        </Text>
        <Text>
          Hi, I&apos;m Si Jun Lee. I am a computer science and philosophy double
          degree student at the{' '}
          <TextLink
            to={
              'https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering'
            }
          >
            University of New South Wales
          </TextLink>
          , Australia.
        </Text>
        <Button
          asChild
          textTransform={'uppercase'}
          letterSpacing={'widest'}
          variant={'outline'}
          borderRadius={0}
          _hover={{
            color: 'blue.fg',
            borderColor: 'blue.fg',
          }}
        >
          <NextLink href={isResumePage ? '/' : '/resume'}>
            {isResumePage ? 'About This Site' : 'View Resume'}
          </NextLink>
        </Button>
      </Flex>

      <Flex flexDir='column' py={10} gap={8} width='100%'>
        {/* Contact block */}
        <ContactIcons />
        <Text
          textTransform={'uppercase'}
          letterSpacing={'wider'}
          fontSize={'xs'}
          color={'fg.muted'}
        >
          © SI JUN LEE&nbsp;&nbsp;
          <TextLink to={'https://sijunlee.com'}>SIJUNLEE.COM</TextLink>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
