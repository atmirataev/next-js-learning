import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { IPost } from '../../components/Post/types';
import Post from '../../components/Post/Post';

type OwnProps = {
  postData: IPost;
};

export default function PostData({ postData }: OwnProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Post post={postData} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
