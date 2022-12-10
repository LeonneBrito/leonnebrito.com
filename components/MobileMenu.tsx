import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from '../hooks/useTranslation';
import { styled } from '../stitches.config';

import LanguageChange from './LocationChange';

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  const router = useRouter();
  const { translations } = useTranslation();

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return (
    <Container className={open ? 'active' : ''}>
      <Wrapper>
        <Link href="/">{translations.menu.home}</Link>
        <Link href="/about">{translations.menu.about}</Link>
        <Link href="/blog">{translations.menu.blog}</Link>
        <Link href="/setup">{translations.menu.setup}</Link>
        <Link href="/contact">{translations.menu.contact}</Link>
        <LanguageChange />
      </Wrapper>
    </Container>
  );
};

export default MobileMenu;

const Container = styled('div', {
  position: 'fixed',
  top: '59px',
  left: 0,
  width: '100%',
  height: '100%',
  background: '$background',
  zIndex: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.3s ease-in-out',
  transform: 'translateY(-100%)',
  pointerEvents: 'none',
  '-webkit-backface-visibility': 'hidden',

  '&.active': {
    opacity: 1,
    visibility: 'visible',
    transform: 'translateY(0%)',
    pointerEvents: 'all'
  }
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',

  width: '100%',
  height: '100%',
  padding: '15px',
  marginTop: '30px',

  fontSize: '1.25rem',

  a: {
    color: '$primary',
    textDecoration: 'none',
    paddingBottom: '1rem',
    borderBottom: '0.5px solid #29272E',

    '&:hover': {
      color: '$yellow500'
    }
  }
});
