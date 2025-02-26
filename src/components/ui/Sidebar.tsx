import { Button, Flex, Text, Image } from '@chakra-ui/react';
import ContactIcons from './ContactIcons';
import { NavLink as RouterNavLink, useLocation } from 'react-router';
import TextLink from './TextLink';

const Sidebar = () => {
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

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
          src={'/images/profile.webp'}
          alt={'Si Jun Lee'}
          boxSize={'32'}
          fit='cover'
          borderRadius={'full'}
          objectPosition={'left bottom'}
        />
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
          Hi, I'm Si Jun Lee. I am computer science and philosophy double degree
          student at the{' '}
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
          <RouterNavLink to={isResumePage ? '/about' : '/resume'}>
            {isResumePage ? 'About Me' : 'View Resume'}
          </RouterNavLink>
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
          <TextLink to={'https://sijun.lee.com'}>SIJUN.LEE.COM</TextLink>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
