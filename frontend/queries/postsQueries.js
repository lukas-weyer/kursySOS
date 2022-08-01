import { gql } from "@apollo/client";

export const GET_ALL_POSTS_QUERY = gql`
  query posts($slug: String, $take: Int) {
    posts(take: $take, where: { slug: { not: { equals: $slug } } }) {
      id
      slug
      title
      content {
        document
      }
      publishDate
      author {
        id
        name
      }
      tags {
        name
      }
    }
  }
`;

export const GET_SINGLE_POST_QUERY = gql`
  query post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      content {
        document
      }
      publishDate
      author {
        id
        name
      }
      tags {
        name
      }
    }
  }
`;
