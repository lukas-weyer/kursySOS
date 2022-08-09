import { initializeApollo, addApolloState } from "../../../lib/apolloClient";

import Layout from "../../../components/Layout";
import CourseDrawer from "../../../components/CourseDrawer";
import YouTube from "react-youtube";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { GET_SINGLE_LESSON_QUERY } from "../../../queries/coursesQueries";
import PageTransition from "../../../components/PageTransition";

export default function LessonPage({ lesson }) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1
    }
  };

  if (!lesson) return <p>Brak lekcji do wyświetlenia</p>;

  return (
    <PageTransition>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <YouTube
          className="container-styles"
          iframeClassName="iframe-styles"
          videoId={lesson.youtube}
          opts={opts}
        />
      </Box>
    </PageTransition>
  );
}

LessonPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Box component="article" style={{ display: "flex" }}>
        {page}
        <CourseDrawer />
      </Box>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { lessonSlug } = context.query;

  const { data } = await apolloClient.query({
    query: GET_SINGLE_LESSON_QUERY,
    variables: { lessonSlug }
  });

  return addApolloState(apolloClient, {
    props: { lesson: data.lesson }
  });
}
