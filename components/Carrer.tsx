import Link from 'next/link';

import { styled } from '../stitches.config';
import { Heading } from '../ui';

interface CarrerProps {
  role: string;
  company: string;
  link: string;
  location: string;
  date: string;
}

const Carrer = ({ role, company, link, location, date }: CarrerProps) => {
  return (
    <CarrerContainer>
      <Heading
        size={'5'}
        color="primary"
        css={{
          margin: '20px 0 0'
        }}
      >
        {role}
      </Heading>
      <p>
        <Link href={link} passHref>
          {company}
        </Link>
        <span> • {location}</span>
      </p>
      <p>
        <span>{date}</span>
      </p>
    </CarrerContainer>
  );
};

export default Carrer;

const CarrerContainer = styled('div', {
  marginTop: '40px',

  p: {
    margin: 0,

    a: {
      borderBottom: '1px solid $primary',
      color: '$primary',
      textDecoration: 'none',
      transition: 'all 0.3s ease',

      '&:hover': {
        color: '$secondary'
      }
    }
  }
});
