import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },

  'body, html': {
    scrollBehavior: 'smooth'
  },

  '::-webkit-scrollbar': {
    width: '6px',
    height: 0
  },

  '::-webkit-scrollbar, ::-webkit-scrollbar-track': {
    background: 'transparent'
  },

  '::-webkit-scrollbar-thumb': {
    background: '#4d4d57'
  },

  '@media(max-width: 1080px)': {
    html: {
      fontSize: '93.75%'
    }
  },

  '@media(max-width: 720px)': {
    html: {
      fontSize: '87.5%'
    }
  },

  body: {
    backgroundColor: '$background',
    fontFamily: '$body',
    '-webkit-font-smoothing': 'antialiased'
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 0
  }
});
