import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      background: '#151417',
      primary: '#f2f2f2',
      secondary: '#8f9ba8',
      red500: '#E96379',
      pink500: '#ff80bf',
      purple500: '#9580ff',
      cyan500: '#80ffea',
      green500: '#80ff80',
      orange500: '#ff9580',
      yellow500: '#ffff80'
    },
    fonts: {
      body: 'Rubik, sans-serif;',
      heading: 'Space Grotesk, sans-serif',
      mono: 'Space Mono, monospace'
    }
  },
  media: {
    bp1: '(min-width: 768px)',
    bp2: '(max-width: 768px)'
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: string) => ({ paddingTop: value, paddingBottom: value })
  }
});
