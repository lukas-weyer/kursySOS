import CourseDescriptionSection from "../../../components/CourseDescriptionSection";
import { initializeApollo, addApolloState } from "../../../lib/apolloClient";

import { GET_SINGLE_COURSE_QUERY } from "../../../queries/coursesQueries";

export default function CoursePage({ course }) {
  console.log(course);
  return (
    <>
      <CourseDescriptionSection />
    </>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { slug } = context.query;

  const { data } = await apolloClient.query({
    query: GET_SINGLE_COURSE_QUERY,
    variables: {
      slug
    }
  });
  return addApolloState(apolloClient, {
    props: {
      course: data.course
    }
  });
}
