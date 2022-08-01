import { initializeApollo, addApolloState } from "../../lib/apolloClient";

import Link from "next/link";

import { GET_ALL_COURSES_QUERY } from "../../queries/coursesQueries";

export default function CoursesPage({ courses }) {
  console.log(courses);
  return (
    <>
      <p>Strona z listą kursów</p>
      {courses.map((course) => (
        <div key={course.id}>
          <Link href={`/kursy/${course.slug}`}>{course.title}</Link>
        </div>
      ))}
    </>
  );
}

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
