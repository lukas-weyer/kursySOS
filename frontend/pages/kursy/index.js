import { initializeApollo, addApolloState } from "../../lib/apolloClient";

import Link from "next/link";

import { GET_ALL_COURSES_QUERY } from "../../queries/coursesQueries";
import Layout from "../../components/Layout";
import PageTransition from "../../components/PageTransition";

export default function CoursesPage({ courses }) {
  return (
    <PageTransition>
      <p>Strona z listą kursów</p>
      {courses.map((course) => (
        <div key={course.id}>
          <Link href={`/kursy/${course.slug}`}>{course.title}</Link>
        </div>
      ))}
    </PageTransition>
  );
}

CoursesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_ALL_COURSES_QUERY
  });
  return addApolloState(apolloClient, {
    props: {
      courses: data.courses
    }
  });
}
