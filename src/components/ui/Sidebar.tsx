import { Button, Flex, Text, Link, Image } from '@chakra-ui/react';
import ContactIcons from './ContactIcons';

const Sidebar = () => {
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
        borderBottomColor={'gray.300'}
        gap={8}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        width='100%'
      >
      ***REMOVED***/* Headers */}
        <Image
          src={'/images/profile.jpg'}
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
        borderBottomColor={'gray.300'}
        py={10}
        gap={8}
        width='100%'
      >
      ***REMOVED***/* About me block */}
        <Text letterSpacing={'widest'} fontWeight={'semibold'}>
          ABOUT
        </Text>
        <Text>
          Hi, I'm Si Jun Lee. I am computer science and philosophy double degree
          student at the{' '}
          <Link
            variant='underline'
            href='https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering'
            target='_blank'
            textDecorationColor={'gray.200'}
            textDecorationThickness={1.1}
            _hover={{
              color: 'blue.700',
              textDecorationColor: 'blue.700',
              textDecoration: 'none',
            }}
          >
            University of New South Wales
          </Link>
          , Australia.
        </Text>
        <Button
          textTransform={'uppercase'}
          letterSpacing={'widest'}
          variant={'outline'}
          borderRadius={0}
          _hover={{
            color: 'blue.700',
            borderColor: 'blue.700',
          }}
        >
          Learn more
        </Button>
      </Flex>

      <Flex flexDir='column' py={10} gap={8} width='100%'>
      ***REMOVED***/* Contact block */}
        <ContactIcons />
        <Text
          textTransform={'uppercase'}
          letterSpacing={'wider'}
          color={'gray.500'}
          fontSize={'xs'}
        >
          © SI JUN LEE&nbsp;&nbsp;
          <Link
            variant='underline'
            href='https://sijun.lee.com'
            target='_blank'
            textDecorationColor={'gray.200'}
            textDecorationThickness={1.1}
            color='inherit'
            _hover={{
              color: 'blue.700',
              textDecorationColor: 'blue.700',
              textDecoration: 'none',
            }}
          >
            SIJUN.LEE.COM
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
