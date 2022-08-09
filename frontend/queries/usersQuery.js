import { gql } from "@apollo/client";

export const GET_ALL_USERS_QUERY = gql`
  query Users {
    users {
      id
      name
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    authenticatedItem {
      ... on User {
        id
        name
        email
        password {
          isSet
        }
      }
    }
  }
`;
