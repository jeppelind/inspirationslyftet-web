import Layout from '../components/layout';
import Splashscreen from '../components/splashscreen';
import About from '../components/about';
import Cards from '../components/cards';
import { getSortedPostsData, PostProps } from '../lib/posts';
import PostsPreview from '../components/posts-preview';
import InfoHalf from '../components/info-half';

export type StaticProps = {
  blogPosts: PostProps[]
}

export const getStaticProps = async () => {
  const blogPosts = await getSortedPostsData();
  return {
    props: {
      blogPosts,
    },
  };
}

export default function Home({ blogPosts }: StaticProps) {
  return (
    <Layout>
      <Splashscreen />
      <About />
      <Cards />
      <PostsPreview blogPosts={blogPosts} />
      <InfoHalf />
    </Layout>
  )
}
