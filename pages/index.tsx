import React, { useEffect, useState } from 'react';

import { useCommandMenu } from '../hooks/useCommandMenu';
import { useTranslation } from '../hooks/useTranslation';
import { styled } from '../stitches.config';
import { Heading } from '../ui';
import { getOS } from '../utils/getOS';

export default function Home() {
  const [os, setOS] = useState<string | undefined>('');
  const { translations } = useTranslation();
  const { setIsOpen: setIsOpenCommandMenu } = useCommandMenu();

  useEffect(() => {
    return setOS(getOS());
  }, []);

  return (
    <Content>
      <React.Fragment>
        <Heading size={'1'} color={'primary'}>
          {translations.home.title}
        </Heading>
        <p>
          <strong>
            {translations.home.role}{' '}
            <a href="https://nav9.tech/" target="_blank" rel="noreferrer">
              nav9
            </a>
            .
          </strong>
          <br />
          {translations.home.description}
        </p>
        {os === 'MacOS' ? (
          <button
            dangerouslySetInnerHTML={{
              __html: translations.home.kmenu_command_mac
            }}
            onClick={() => setIsOpenCommandMenu(true)}
          />
        ) : (
          <button
            dangerouslySetInnerHTML={{
              __html: translations.home.kmenu_command_win
            }}
            onClick={() => setIsOpenCommandMenu(true)}
          />
        )}
      </React.Fragment>
    </Content>
  );
}

const Content = styled('div', {
  marginX: 'auto',
  maxWidth: '760px',
  paddingX: '20px',

  p: {
    marginY: '20px',
    color: '$secondary',

    strong: {
      color: '$primary',
      fontWeight: '500',

      a: {
        borderBottom: '0.5px solid $secondary',
        color: '$primary',
        textDecoration: 'none',
        transition: 'all 0.2s ease-in-out',

        '&:hover': {
          opacity: '0.8'
        }
      }
    }
  },

  button: {
    appearance: 'none',
    background: 'none',
    border: 0,
    borderRadius: '8px',
    cursor: 'pointer',
    color: '$primary',
    display: 'inline-block',
    fontSize: '1rem',
    fontFamily: '$body',
    fontWeight: '500',
    lineHeight: '1.5',
    outline: 'none',
    padding: '8px 10px',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.09)',

      kbd: {
        backgroundColor: '$primary'
      }
    },

    kbd: {
      color: '$background',
      maxHeight: '24px',
      fontFamily: '$mono',
      fontWeight: '400',
      backgroundColor: '$secondary',
      marginRight: '3px',
      padding: '1px 5px',
      borderRadius: '4px',
      fontSize: '14px',
      transition: 'all 0.2s ease-in-out'
    }
  }
});
