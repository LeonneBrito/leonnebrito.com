import { styled } from '../stitches.config';

import NavLink from './Navlink';

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <NavLink href="/">Início</NavLink>
        <NavLink href="/about">Sobre</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/setup">Setup</NavLink>
        <NavLink href="/contact">Contato</NavLink>
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
