import Link from "next/link";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import { GET_ALL_POSTS_QUERY } from "../../queries/postsQueries";

import PageTransition from "../../components/PageTransition";
import Layout from "../../components/Layout";

export default function PostsPage({ posts }) {
  return (
    <PageTransition>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </PageTransition>
  );
}

PostsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: GET_ALL_POSTS_QUERY
  });
  const { posts } = data;
  return addApolloState(apolloClient, {
    props: {
      posts
    }
  });
}
