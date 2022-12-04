import { styled } from '../stitches.config';

const Heading = styled('h1', {
  fontFamily: '$heading',
  margin: '0 0 20px',

  variants: {
    size: {
      1: {
        fontSize: '3rem',
        lineHeight: '1.2'
      },
      2: {
        fontSize: '2rem',
        lineHeight: '1.3'
      },
      3: {
        fontSize: '1.5rem',
        lineHeight: '1.4'
      },
      4: {
        fontSize: '1.25rem',
        lineHeight: '1.5'
      },
      5: {
        fontSize: '1.125rem',
        lineHeight: '1.6'
      }
    },
    color: {
      cyanToGreen: {
        background: 'linear-gradient(90deg, $cyan500 0%, $green500 100%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      },
      pinkToPurple: {
        background: 'linear-gradient(135deg, $pink500 0%, $purple500 100%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      },
      purpleToCyan: {
        background: 'linear-gradient(135deg, $purple500 0%, $cyan500 100%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      },
      yellowToOrange: {
        background: 'linear-gradient(135deg, $yellow500 0%, $orange500 100%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      },
      primary: {
        color: '$primary'
      }
    }
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: string) => ({ paddingTop: value, paddingBottom: value })
  }
});

export { Heading };
