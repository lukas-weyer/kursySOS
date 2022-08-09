import Post from "../../components/Post";
import PageTransition from "../../components/PageTransition";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import {
  GET_SINGLE_POST_QUERY,
  GET_ALL_POSTS_QUERY
} from "../../queries/postsQueries";
import RecentPosts from "../../components/RecentPosts";
import BlogPostHeroImage from "../../components/BlogPostHeroImage";
import Layout from "../../components/Layout";

export default function BlogPage({ post, posts }) {
  return (
    <PageTransition>
      <BlogPostHeroImage />
      <Box component="article">
        <Box component="header">
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              height: "calc(65vh - 64px)",
              top: "0",
              left: "0"
            }}
          >
            <Typography variant="h3" component="h1" sx={{ color: "white" }}>
              {post.title}
            </Typography>
          </Container>
        </Box>
        <Box sx={{ background: "white" }}>
          <Container component="section" sx={{ paddingTop: "64px" }}>
            <Grid container columnSpacing={8}>
              <Grid item xs={12} md={8}>
                <Post data={post} />
              </Grid>
              {posts.length > 0 && (
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <RecentPosts posts={posts} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </PageTransition>
  );
}

BlogPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { slug } = context.query;

  const { data: singlePostData } = await apolloClient.query({
    query: GET_SINGLE_POST_QUERY,
    variables: { slug }
  });

  const { data: allPostData } = await apolloClient.query({
    query: GET_ALL_POSTS_QUERY,
    variables: {
      slug,
      take: 4
    }
  });

  return addApolloState(apolloClient, {
    props: {
      post: singlePostData.post,
      posts: allPostData.posts
    }
  });
}
