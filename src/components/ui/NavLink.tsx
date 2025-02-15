import { Link } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router';

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
        color: 'blue.700',
      }}
      outline={'none'}
      textTransform={'uppercase'}
    >
      <RouterNavLink to={path}>{label}</RouterNavLink>
    </Link>
  );
};

export default NavLink;
