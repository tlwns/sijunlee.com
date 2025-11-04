import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import MainLayout from '@/components/layouts/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <Flex
        flexDir='column'
        gap={10}
        w='100%'
        align='center'
        justify='center'
        minH='60vh'
        px={{
          base: 20,
          md: 48,
          lg: 180,
          xl: 240,
          '2xl': 480,
        }}
      >
        <Flex flexDir='column' gap={6} align='center' textAlign='center'>
          <Heading
            as='h1'
            fontSize={{ base: '6xl', md: '8xl' }}
            fontWeight='extrabold'
            letterSpacing='widest'
          >
            404
          </Heading>

          <Heading
            as='h2'
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight='semibold'
            letterSpacing='wider'
            textTransform='uppercase'
          >
            Page Not Found
          </Heading>

          <Text
            fontSize='sm'
            fontWeight='light'
            letterSpacing='wider'
            maxW='md'
          >
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </Text>
        </Flex>

        <Button
          asChild
          textTransform={'uppercase'}
          letterSpacing={'widest'}
          variant={'solid'}
          borderRadius={0}
          _hover={{
            bg: 'blue.fg',
          }}
        >
          <NextLink href={'/'}>Return Home</NextLink>
        </Button>
      </Flex>
    </MainLayout>
  );
}
