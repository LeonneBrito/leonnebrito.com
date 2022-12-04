import ReactMarkdown from 'react-markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { Clock } from 'phosphor-react';

import ViewsCounter from '../../components/ViewsCounter';
import { getPosts } from '../../lib';
import { styled } from '../../stitches.config';
import { Heading } from '../../ui';

interface PostProps {
  slug: string;
  title: string;
  date: string;
  markdown: string;
}

const Post = ({ date, markdown, title, slug }: PostProps) => {
  const readingTime = markdown.split(' ').length / 200;

  return (
    <Content>
      <Heading size={'3'} color={'yellowToOrange'}>
        {title}
      </Heading>
      <PostInfo>
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/73369138?v=4"
            alt="avatar"
            width={30}
            height={30}
            style={{ borderRadius: '50%' }}
          />
          Leonne Brito / {date}
        </div>
        <div>
          <span>
            <Clock size={20} />
            {readingTime.toFixed(0)} min de leitura
          </span>
          <ViewsCounter slug={slug} blogPage={true} />
        </div>
      </PostInfo>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Content>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map(post => `/blog/${post.slug}`),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts();
  const post = posts.find(post => post.slug === params?.slug);

  return {
    props: {
      slug: post?.slug,
      title: post?.title,
      date: post?.date,
      markdown: post?.markdown
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};

const Content = styled('div', {
  marginX: 'auto',
  maxWidth: '760px',
  paddingX: '20px',

  '> p': {
    margin: '0 0 20px'
  }
});

const PostInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  margin: '20px 0',

  '@bp2': {
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-start'
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.8rem',
    color: '$secondary',

    span: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }
});
