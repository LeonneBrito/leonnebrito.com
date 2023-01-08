import Hamburger from 'hamburger-react';
import { Command } from 'phosphor-react';

import { useCommandMenu } from '../hooks/useCommandMenu';
import { useDevice } from '../hooks/useDevice';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { styled } from '../stitches.config';

import LanguageChange from './LocationChange';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar';

const Topbar = () => {
  const device = useDevice();
  const { setIsOpen: setIsOpenCommandMenu } = useCommandMenu();
  const { isOpen, setIsOpen: setIsOpenMobileMenu } = useMobileMenu();

  return (
    <Header>
      {device === 'mobile' ? (
        <>
          <Hamburger
            toggled={isOpen}
            onToggle={() => setIsOpenMobileMenu(!isOpen)}
            size={24}
            color="#fff"
            label="Show menu"
          />
          <Command
            size={24}
            style={{ marginRight: '15px' }}
            onClick={() => setIsOpenCommandMenu(true)}
          />
          <MobileMenu open={isOpen} setOpen={setIsOpenMobileMenu} />
        </>
      ) : (
        <>
          <Navbar />
          <LanguageChange />
          <Command
            size={24}
            style={{ marginRight: '20px', marginLeft: '20px' }}
            onClick={() => setIsOpenCommandMenu(true)}
          />
        </>
      )}
    </Header>
  );
};

export default Topbar;

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  position: 'absolute',
  top: 0,
  zIndex: 999,
  marginTop: '13px',

  color: '$primary',
  fontSize: '0.75rem',

  minHeight: '59px',
  width: '100%',

  '@bp2': {
    marginTop: 0
  }
});
