import { language } from 'gray-matter';

import { useTranslation } from '../hooks/useTranslation';
import { styled } from '../stitches.config';

const LanguageChange = () => {
  const { location, setLocation } = useTranslation();

  return (
    <Content>
      <button
        onClick={() => setLocation('en')}
        style={location === 'en' ? { color: '#f2f2f2' } : { color: '#8f9ba8' }}
      >
        EN
      </button>
      <span>|</span>
      <button
        onClick={() => setLocation('pt')}
        style={location === 'pt' ? { color: '#f2f2f2' } : { color: '#8f9ba8' }}
      >
        PT
      </button>
    </Content>
  );
};

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  gap: '10px',
  width: '100px',

  button: {
    border: 'none',
    background: 'none',
    color: '$primary',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      opacity: '0.8'
    }
  },

  '@bp2': {
    width: 'auto'
  }
});

export default LanguageChange;
