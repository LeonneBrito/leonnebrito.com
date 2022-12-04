import { styled } from '../stitches.config';

const StyledButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',

  borderRadius: '4px',
  border: 0,
  padding: '0.5rem 1rem',
  color: '$primary',
  height: '50px',
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    filter: 'brightness(1.1)'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    filter: 'brightness(0.8)'
  },

  variants: {
    color: {
      pink: {
        backgroundColor: '$pink500'
      },
      cyan: {
        backgroundColor: '$cyan500'
      },
      purple: {
        backgroundColor: '$purple500'
      },
      green: {
        backgroundColor: '$green500'
      }
    }
  }
});

export const Button = StyledButton;
