import { GetStaticProps } from 'next';

import Post, { PostProps as IPost } from '../../components/Post';
import { getPosts } from '../../lib';
import { styled } from '../../stitches.config';
import { Heading } from '../../ui';

interface BlogProps {
  posts: IPost[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <Content>
      <Heading size={'1'} color={'yellowToOrange'}>
        Histórias nossas histórias.
      </Heading>
      <p>
        Aqui você encontra artigos de diversas áreas, desde tecnologia até
        cervejas artesanais e viagens. Espero que goste! :)
      </p>
      <Heading size={'2'} color={'yellowToOrange'}>
        Todos os posts
      </Heading>
      <ul>
        {posts.map(({ slug, title, date, description }) => (
          <Post
            key={slug}
            slug={slug}
            title={title}
            description={description}
            date={date}
          />
        ))}
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  };
};
