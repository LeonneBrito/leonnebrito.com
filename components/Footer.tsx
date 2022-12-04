import Link from 'next/link';
import {
  At,
  Coffee,
  GitBranch,
  InstagramLogo,
  LinkedinLogo
} from 'phosphor-react';

import { styled } from '../stitches.config';

const Footer = () => {
  return (
    <Container>
      <Link href="mailto:contato@leonnebrito.com.br" passHref target={'_blank'}>
        <At size={20} />
        <span>e-mail</span>
      </Link>
      <Link
        href="https://www.buymeacoffee.com/leonnebrito"
        passHref
        target={'_blank'}
      >
        <Coffee size={20} />
        <span>coffee</span>
      </Link>
      <Link
        href="https://www.instagram.com/leonnebrito/"
        passHref
        target={'_blank'}
      >
        <InstagramLogo size={20} />
        <span>instagram</span>
      </Link>
      <Link href="https://github.com/LeonneBrito" passHref target={'_blank'}>
        <GitBranch size={20} />
        <span>github</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/leonne-sousa-brito/"
        passHref
        target={'_blank'}
      >
        <LinkedinLogo size={20} />
        <span>linkedin</span>
      </Link>
    </Container>
  );
};

export default Footer;

const Container = styled('footer', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingY: '20px',

  a: {
    marginLeft: '20px',
    color: '$secondary',
    display: 'flex',
    gap: '0.5rem',
    fontSize: '0.938rem',
    border: 0,
    textDecoration: 'none',
    textTransform: 'lowercase',
    transition: 'all 0.2s ease-in-out',

    '&:first-child': {
      marginLeft: 0
    },

    '&:hover': {
      color: '$primary'
    },

    span: {
      display: 'block',

      '@bp2': {
        display: 'none'
      }
    }
  }
});
