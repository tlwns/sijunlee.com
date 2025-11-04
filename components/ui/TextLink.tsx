import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface TextLinkProps {
  to: string;
  children: React.ReactNode;
  underline?: boolean;
}

const TextLink = ({ to, children, underline = true }: TextLinkProps) => {
  const isExternal = to.startsWith('http');

  return isExternal ? (
    <Link
      color={'inherit'}
      href={to} // Use href for external links
      textDecorationColor='border'
      textDecorationThickness={1.1}
      {...(underline && { variant: 'underline' })}
      _hover={{
        textDecoration: 'none',
        color: 'blue.fg',
      }}
      outline='none'
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </Link>
  ) : (
    <Link
      color={'inherit'}
      asChild
      textDecorationColor='border'
      textDecorationThickness={1.1}
      {...(underline && { variant: 'underline' })}
      _hover={{
        textDecoration: 'none',
        color: 'blue.fg',
      }}
      outline='none'
    >
      <NextLink href={to}>{children}</NextLink>
    </Link>
  );
};

export default TextLink;
