import { initializeApollo, addApolloState } from "../../../lib/apolloClient";

import { GET_SINGLE_LESSON_QUERY } from "../../../queries/coursesQueries";

export default function Lesson({ lesson }) {
  console.log("lesson", lesson);
  if (!lesson) return <p>Brak lekcji do wyświetlenia</p>;
  return (
    <>
      <p>Lekcja nr {lesson?.title}</p>
    </>
  );
}

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
