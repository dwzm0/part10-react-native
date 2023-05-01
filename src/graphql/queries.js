import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories {
        repositories {
        edges {
            node {
            fullName,
            id,
            ownerAvatarUrl,
            description,
            language,
            stargazersCount,
            forksCount,
            reviewCount,
            ratingAverage
            }
        }
        }
    }
`;

export const GET_ME = gql`
{
    me {
      id
      username
    }
}

`