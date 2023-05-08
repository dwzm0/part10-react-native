import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({order, searchKeyword, first}) => {
  if (order === "LATEST_ADDED") {
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
      variables: {first, orderBy: "CREATED_AT", orderDirection: "DESC", searchKeyword},
      fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
  
      if (!canFetchMore) {
        return;
      }
  
      fetchMore({
        variables: {
          after: data.repositories.pageInfo.endCursor,
          order, 
          searchKeyword,
        },
      });
    };
  
    return {
      repositories: data?.repositories,
      fetchMore: handleFetchMore,
      loading,
      ...result,
    };
    }else if (order === "HIGHEST_RATING") {
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
      variables: {first, orderBy: "RATING_AVERAGE", orderDirection: "DESC", searchKeyword},
      fetchPolicy: 'cache-and-network',
    });
    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
  
      if (!canFetchMore) {
        return;
      }
  
      fetchMore({
        variables: {
          after: data.repositories.pageInfo.endCursor,
          order, 
          searchKeyword,
        },
      });
    };
  
    return {
      repositories: data?.repositories,
      fetchMore: handleFetchMore,
      loading,
      ...result,
    };
  }else if (order === "LOWEST_RATING") {
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
      variables: {first, orderBy: "RATING_AVERAGE", orderDirection: "ASC", searchKeyword},
      fetchPolicy: 'cache-and-network',
    });
    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
  
      if (!canFetchMore) {
        return;
      }
  
      fetchMore({
        variables: {
          after: data.repositories.pageInfo.endCursor,
          order, 
          searchKeyword,
        },
      });
    };
  
    return {
      repositories: data?.repositories,
      fetchMore: handleFetchMore,
      loading,
      ...result,
    };
  }

};

export default useRepositories;


