import React, { ReactNode, useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import { toast } from 'react-toastify';
import Fireworks from '@fireworks-js/react';
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
import { useTranslation } from '../hooks/useTranslation';
import { styled } from '../stitches.config';
import { isBeforeChristmasDay } from '../utils/isBeforeChristmasDay';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { translations } = useTranslation();
  const [isChristmas, setIsChristmas] = useState(false);
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const date = new Date();
    setIsChristmas(isBeforeChristmasDay(date));

    if (
      (date.getMonth() === 11 && date.getDate() === 31) ||
      (date.getMonth() === 0 && date.getDate() === 1)
    ) {
      setIsNewYear(true);
    }
  }, []);

  const commands = [
    {
      name: translations.kmenu.general,
      items: [
        {
          icon: <Link size={20} />,
          label: translations.kmenu.copy,
          shortcut: 'l',
          action: () => {
            navigator.clipboard.writeText('https://leonnebrito.com');
            toast.success(translations.kmenu.copy_success, {
              theme: 'dark'
            });
          }
        },
        {
          icon: <EnvelopeOpen size={20} />,
          label: translations.kmenu.send_email,
          href: '/contact',
          shortcut: 'e'
        },
        {
          icon: <Code size={20} />,
          label: translations.kmenu.source_code,
          href: 'https://github.com/LeonneBrito/leonnebrito.com',
          shortcut: 'g',
          newTab: true
        }
      ]
    },
    {
      name: translations.kmenu.go_to,
      items: [
        {
          icon: <House size={20} />,
          label: translations.kmenu.home,
          href: '/',
          shortcut: 'i'
        },
        {
          icon: <UserCircle size={20} />,
          label: translations.kmenu.about,
          href: '/about',
          shortcut: 's'
        },
        {
          icon: <PencilLine size={20} />,
          label: translations.kmenu.blog,
          href: '/blog',
          shortcut: 'b'
        },
        {
          icon: <Laptop size={20} />,
          label: translations.kmenu.setup,
          href: '/setup',
          shortcut: 'u'
        },
        {
          icon: <ChatCircleDots size={20} />,
          label: translations.kmenu.contact,
          href: '/contact',
          shortcut: 'c'
        }
      ]
    }
  ] as CommandCategory[];

  return (
    <section>
      {isChristmas && (
        <Snowfall
          color="#fff"
          snowflakeCount={100}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999
          }}
        />
      )}
      {isNewYear && (
        <Fireworks
          options={{
            acceleration: 1.05,
            rocketsPoint: {
              min: 0,
              max: 100
            }
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: 'transparent'
          }}
        />
      )}
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
