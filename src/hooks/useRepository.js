import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPOSITORY_REVIEW } from "../graphql/queries";

const useRepository = ({repositoryId, first }) => {
  const variables = {
    repositoryId,
    first,
  };
    const { data, loading, fetchMore, ...result } = useQuery(GET_SINGLE_REPOSITORY_REVIEW, {
     variables,
     fetchPolicy: 'cache-and-network',
    });
    console.log(data)
    console.log(loading)
    console.log(fetchMore)

    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
  
      if (!canFetchMore) {
        return;
      }
  
      fetchMore({
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
          ...variables
        },
      });
    };
  
    return {
      repository: data?.repository,
      fetchMore: handleFetchMore,
      loading,
      ...result,
    };
  };


export default useRepository