import { language } from 'gray-matter';
import Image from 'next/image';

import { useTranslation } from '../hooks/useTranslation';
import { styled } from '../stitches.config';

const LanguageChange = () => {
  const { location, setLocation } = useTranslation();

  return (
    <Content>
      <div>
        <Image
          src="/icons/usa.png"
          alt="usa flag"
          width={16}
          height={11}
          onClick={() => setLocation('en')}
        />
        <button
          onClick={() => setLocation('en')}
          style={
            location === 'en' ? { color: '#f2f2f2' } : { color: '#8f9ba8' }
          }
        >
          EN
        </button>
      </div>
      <span>|</span>
      <div>
        <Image
          src="/icons/brazil.png"
          alt="usa flag"
          width={16}
          height={11}
          onClick={() => setLocation('en')}
        />
        <button
          onClick={() => setLocation('pt')}
          style={
            location === 'pt' ? { color: '#f2f2f2' } : { color: '#8f9ba8' }
          }
        >
          PT
        </button>
      </div>
    </Content>
  );
};

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  gap: '10px',
  width: '100px',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',

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
    }
  },

  '@bp2': {
    width: 'auto'
  }
});

export default LanguageChange;
