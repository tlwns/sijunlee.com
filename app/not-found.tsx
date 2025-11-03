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
      >
        <Flex flexDir='column' gap={6} align='center' textAlign='center'>
          <Heading
            as='h1'
            fontSize={{ base: '6xl', md: '8xl' }}
            fontWeight='extrabold'
            letterSpacing='widest'
            textTransform='uppercase'
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
            color='fg.muted'
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
