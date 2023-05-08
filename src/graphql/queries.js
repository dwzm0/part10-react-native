import { gql } from '@apollo/client';

import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
query Repositories($after: String, $first: Int, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
  repositories(after: $after, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          ...repositoryBaseFields
          ratingAverage
          reviewCount
        }
        cursor
      }
    }
  }

  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      ...userBaseFields
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
            repository {
              id
            }
          }
        }
      }
    }
  }

  ${USER_BASE_FIELDS}
`;

export const GET_SINGLE_REPOSITORY = gql`
  query Repository($repositoryId: ID!){
    repository(id: $repositoryId) {
      ...repositoryBaseFields
      ratingAverage
      reviewCount
    }
  }

  ${REPOSITORY_BASE_FIELDS}
`

export const GET_SINGLE_REPOSITORY_REVIEW = gql`
query Query($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    id
    reviews(first: $first, after: $after) {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          createdAt
          rating
          text
          user {
            id
            username
          }
        }
      }
    }
  }
}
`