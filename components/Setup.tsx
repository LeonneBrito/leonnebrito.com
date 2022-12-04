import Link from 'next/link';

import { styled } from '../stitches.config';
import { SetupItem } from '../types';
import { Heading } from '../ui';

interface SetupProps {
  title: string;
  items: SetupItem[];
}

const Setup = ({ title, items }: SetupProps) => {
  return (
    <SetupContainer>
      <Heading size="2" color="cyanToGreen" css={{ marginY: '20px' }}>
        {title}
      </Heading>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link} passHref target={'_blank'}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </SetupContainer>
  );
};

export default Setup;

const SetupContainer = styled('div', {
  a: {
    borderBottom: '1px solid $primary',
    color: '$primary',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      color: '$secondary'
    }
  }
});
