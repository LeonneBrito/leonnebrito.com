import React, { ReactNode, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '../stitches.config';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(router.pathname === href);
  }, [router.pathname, href]);

  return (
    <Link>
      <NextLink href={href} passHref>
        <span style={isActive ? { color: '#f2f2f2' } : {}}>{children}</span>
      </NextLink>
    </Link>
  );
};

export default NavLink;

const Link = styled('li', {
  a: {
    border: 0,
    position: 'relative',
    color: '$primary',
    textDecoration: 'none',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    span: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '20px',
      fontSize: '0.75rem',
      color: '$secondary',
      fontWeight: 500,
      letterSpacing: '1.2px',
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition: 'all 0.3s ease',

      '&:hover': {
        color: '$primary'
      }
    }
  }
});
