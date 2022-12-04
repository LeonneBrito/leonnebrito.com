import React, { ReactNode } from 'react';
import { toast } from 'react-toastify';
import {
  ChatCircleDots,
  Code,
  EnvelopeOpen,
  House,
  Laptop,
  Link,
  PencilLine,
  UserCircle
} from 'phosphor-react';

import { CommandCategory } from '../components/CommandMenu';
import CommandMenu from '../components/CommandMenu';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import { styled } from '../stitches.config';

interface LayoutProps {
  children: ReactNode;
}

const commands = [
  {
    name: 'Geral',
    items: [
      {
        icon: <Link size={20} />,
        label: 'Copiar link',
        shortcut: 'l',
        action: () => {
          navigator.clipboard.writeText('https://leonnebrito.com');
          toast.success('Link copiado com sucesso!', {
            theme: 'dark'
          });
        }
      },
      {
        icon: <EnvelopeOpen size={20} />,
        label: 'Enviar e-mail',
        href: '/contact',
        shortcut: 'e'
      },
      {
        icon: <Code size={20} />,
        label: 'Código fonte',
        href: 'https://github.com/LeonneBrito/leonnebrito.com',
        shortcut: 'g',
        newTab: true
      }
    ]
  },
  {
    name: 'Ir para',
    items: [
      {
        icon: <House size={20} />,
        label: 'Início',
        href: '/',
        shortcut: 'i'
      },
      {
        icon: <UserCircle size={20} />,
        label: 'Sobre',
        href: '/about',
        shortcut: 's'
      },
      {
        icon: <PencilLine size={20} />,
        label: 'Blog',
        href: '/blog',
        shortcut: 'b'
      },
      {
        icon: <Laptop size={20} />,
        label: 'Setup',
        href: '/setup',
        shortcut: 'u'
      },
      {
        icon: <ChatCircleDots size={20} />,
        label: 'Contato',
        href: '/contact',
        shortcut: 'c'
      }
    ]
  }
] as CommandCategory[];

const Layout = ({ children }: LayoutProps) => {
  return (
    <section>
      <Topbar />
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
      <CommandMenu categories={commands} />
      <Footer />
    </section>
  );
};

export default Layout;

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flex: '1 1 0%',
  marginX: 'auto',
  paddingY: '110px',
  overflow: 'hidden',

  '@bp2': {
    paddingY: '80px'
  }
});

const Wrapper = styled('div', {
  fontSize: '1rem',
  lineHeight: '2rem',
  color: '$secondary',
  position: 'relative',
  zIndex: '1',
  height: '100%',
  paddingY: '20px'
});
