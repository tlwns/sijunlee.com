import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface NavLinkProps {
  path: string;
  label: string;
}

const NavLink = ({ path, label }: NavLinkProps) => {
  return (
    <Link
      asChild
      _hover={{
        textDecoration: 'none',
        color: 'blue.fg',
      }}
      outline={'none'}
      textTransform={'uppercase'}
    >
      <NextLink href={path}>{label}</NextLink>
    </Link>
  );
};

export default NavLink;
