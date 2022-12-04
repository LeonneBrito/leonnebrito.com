import Link from 'next/link';
import { CalendarBlank } from 'phosphor-react';

import { styled } from '../stitches.config';
import { Heading } from '../ui';

import ViewsCounter from './ViewsCounter';

export interface PostProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

const Post = ({ slug, title, description, date }: PostProps) => {
  return (
    <PostContainer>
      <Link href={`/blog/${slug}`}>
        <PostName>
          <Heading
            size={{
              '@initial': '3',
              '@bp1': '4'
            }}
            color={'primary'}
          >
            {title}
          </Heading>
          <ViewsCounter slug={slug} blogPage={false} />
        </PostName>
        <p>{description}</p>
        <span>
          Leonne Brito - <CalendarBlank /> {date}
        </span>
      </Link>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  padding: '0.5rem',
  gap: '8px',

  a: {
    textDecoration: 'none',

    p: {
      fontFamily: '$body',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      color: '$secondary'
    },

    span: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      gap: '8px',
      color: '$primary'
    }
  }
});

const PostName = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',

  '@bp2': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: '8px'
  }
});
