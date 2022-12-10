/* eslint-disable no-console */
import { GetStaticProps } from 'next';

import Post, { PostProps as IPost } from '../../components/Post';
import { useTranslation } from '../../hooks/useTranslation';
import { getPosts } from '../../lib';
import { styled } from '../../stitches.config';
import { Heading } from '../../ui';

interface BlogProps {
  posts: IPost[];
}

const Blog = ({ posts }: BlogProps) => {
  const { translations } = useTranslation();
  return (
    <Content>
      <Heading size={'1'} color={'yellowToOrange'}>
        {translations.blog.title}
      </Heading>
      <p>{translations.blog.description}</p>
      <Heading size={'2'} color={'yellowToOrange'}>
        {translations.blog.subtitle}
      </Heading>
      <ul>
        {posts.length > 0 ? (
          posts.map(({ slug, title, date, description }) => (
            <Post
              key={slug}
              slug={slug}
              title={title}
              description={description}
              date={date}
            />
          ))
        ) : (
          <p>{translations.blog.no_posts}</p>
        )}
      </ul>
    </Content>
  );
};

export default Blog;

const Content = styled('div', {
  marginX: 'auto',
  maxWidth: '760px',
  paddingX: '20px',

  '> p': {
    margin: '0 0 20px'
  }
});

export const getStaticProps: GetStaticProps = async ctx => {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  };
};
