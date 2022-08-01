import Link from "next/link";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import { GET_ALL_POSTS_QUERY } from "../../queries/postsQueries";

import PageTransition from "../../components/PageTransition";

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
