import { gql } from "@apollo/client";

export const GET_ALL_COURSES_QUERY = gql`
  query courses {
    courses {
      id
      title
      slug
      lessons {
        id
        number
        title
      }
    }
  }
`;

export const GET_SINGLE_COURSE_QUERY = gql`
  query course($slug: String!) {
    course(where: { slug: $slug }) {
      id
      title
      lessons {
        id
        number
        title
      }
    }
  }
`;

export const GET_ALL_LESSONS_QUERY = gql`
  query lessons {
    lessons(orderBy: { number: asc }) {
      id
      number
      title
      number
      course {
        slug
      }
    }
  }
`;

export const GET_SINGLE_LESSON_QUERY = gql`
  query lesson($lessonSlug: String!) {
    lesson(where: { lessonSlug: $lessonSlug }) {
      id
      number
      title
      youtube
      course {
        lessons(orderBy: { number: asc }) {
          number
          title
        }
      }
    }
  }
`;
