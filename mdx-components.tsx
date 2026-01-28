import type { MDXComponents } from 'mdx/types';
import { Heading, Text, List, Code, Blockquote } from '@chakra-ui/react';
import TextLink from './components/ui/TextLink';

const components: MDXComponents = {
  h1: ({ children }) => (
    <Heading
      as='h1'
      fontSize={{ base: '2rem', md: '2.5rem', lg: '3rem' }}
      fontWeight='bold'
      mt={{ base: '2.5rem', md: '3rem' }}
      mb={{ base: '1.25rem', md: '1.5rem' }}
      lineHeight={{ base: '1.2', md: '1.1' }}
      letterSpacing='tight'
    >
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading
      as='h2'
      fontSize={{ base: '1.75rem', md: '2rem', lg: '2.25rem' }}
      fontWeight='semibold'
      mt={{ base: '2rem', md: '2.5rem' }}
      mb={{ base: '1rem', md: '1.25rem' }}
      lineHeight='1.3'
      letterSpacing='tight'
    >
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading
      as='h3'
      fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
      fontWeight='semibold'
      mt={{ base: '1.75rem', md: '2rem' }}
      mb={{ base: '0.875rem', md: '1rem' }}
      lineHeight='1.4'
    >
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading
      as='h4'
      fontSize={{ base: '1.25rem', md: '1.5rem' }}
      fontWeight='medium'
      mt={{ base: '1.5rem', md: '1.75rem' }}
      mb={{ base: '0.75rem', md: '0.875rem' }}
    >
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <Text
      fontFamily={'var(--font-source-serif-4)'}
      fontSize={{ base: '1.125rem', md: '1.25rem', lg: '1.3125rem' }}
      lineHeight={{ base: '1.75', md: '1.8' }}
      mb={{ base: '1.25rem', md: '1.5rem' }}
      fontWeight='400'
    >
      {children}
    </Text>
  ),
  em: ({ children }) => (
    <Text as='em' fontStyle='italic'>
      {children}
    </Text>
  ),
  strong: ({ children }) => (
    <Text as='strong' fontWeight='semibold'>
      {children}
    </Text>
  ),
  ul: ({ children }) => (
    <List.Root
      as='ul'
      pl={{ base: '1.5rem', md: '2rem' }}
      mb={{ base: '1.25rem', md: '1.5rem' }}
      fontSize={{ base: '18px', md: '20px', lg: '21px' }}
      lineHeight={{ base: '1.8', md: '1.85' }}
      spaceY={{ base: 2.5, md: 3 }}
    >
      {children}
    </List.Root>
  ),
  ol: ({ children }) => (
    <List.Root
      as='ol'
      pl={{ base: '1.5rem', md: '2rem' }}
      mb={{ base: '1.25rem', md: '1.5rem' }}
      fontSize={{ base: '18px', md: '20px', lg: '21px' }}
      lineHeight={{ base: '1.8', md: '1.85' }}
      spaceY={{ base: 2.5, md: 3 }}
    >
      {children}
    </List.Root>
  ),
  li: ({ children }) => (
    <List.Item mb={{ base: '0.625rem', md: '0.75rem' }}>{children}</List.Item>
  ),
  a: ({ href, children }) => <TextLink to={href}>{children}</TextLink>,
  blockquote: ({ children }) => (
    <Blockquote.Root>
      <Blockquote.Content>{children}</Blockquote.Content>
    </Blockquote.Root>
  ),
  code: ({ children }) => (
    <Code
      fontSize={{ base: '16px', md: '17px' }}
      px={1.5}
      py={0.5}
      borderRadius='md'
    >
      {children}
    </Code>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
