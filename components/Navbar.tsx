import { useTranslation } from '../hooks/useTranslation';
import { styled } from '../stitches.config';

import NavLink from './Navlink';

const Navbar = () => {
  const { translations } = useTranslation();
  return (
    <Nav>
      <ul>
        <NavLink href="/">{translations.menu.home}</NavLink>
        <NavLink href="/about">{translations.menu.about}</NavLink>
        <NavLink href="/blog">{translations.menu.blog}</NavLink>
        <NavLink href="/setup">{translations.menu.setup}</NavLink>
        <NavLink href="/contact">{translations.menu.contact}</NavLink>
      </ul>
    </Nav>
  );
};

export default Navbar;

const Nav = styled('nav', {
  order: 0,
  textAlign: 'center',
  flex: '1 1 100%',
  flexBasis: 'initial',

  '@bp2': {
    display: 'none'
  },

  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    position: 'relative',
    top: '5px',
    display: 'inline-flex',
    justifyContent: 'space-around'
  }
});
