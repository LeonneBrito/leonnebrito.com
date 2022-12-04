import React from 'react';

import { styled } from '../stitches.config';
import { Heading } from '../ui';

export default function Home() {
  return (
    <Content>
      <React.Fragment>
        <Heading size={'1'} color={'primary'}>
          Leonne Brito
        </Heading>
        <p>
          <strong>
            Software Engineer na{' '}
            <a href="https://nav9.tech/" target="_blank" rel="noreferrer">
              nav9
            </a>
            .
          </strong>
          <br />
          Construindo aplicações web de alto desempenho e com foco na
          experiência do usuário.
        </p>
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
  }
});
