import { Link } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router';

interface TextLinkProps {
  to: string;
  children: React.ReactNode;
}

const TextLink = ({ to, children }: TextLinkProps) => {
  const isExternal = to.startsWith('http');

  return isExternal ? (
    <Link
      href={to} // Use href for external links
      textDecorationColor='gray.200'
      textDecorationThickness={1.1}
      variant='underline'
      _hover={{
        textDecoration: 'none',
        color: 'blue.700',
      }}
      outline='none'
      target='_blank'
      rel='noopener noreferrer'
    >
    ***REMOVED***children}
    </Link>
  ) : (
    <Link
      asChild
      textDecorationColor='gray.200'
      textDecorationThickness={1.1}
      variant='underline'
      _hover={{
        textDecoration: 'none',
        color: 'blue.700',
      }}
      outline='none'
    >
      <RouterNavLink to={to}>{children}</RouterNavLink>
    </Link>
  );
};

export default TextLink;
