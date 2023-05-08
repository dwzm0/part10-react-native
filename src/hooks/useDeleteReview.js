import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_CURRENT_USER } from '../graphql/queries';


const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW);
  
    const deleteReviewHook = async ({ reviewId }) => {
      const result = await mutate({
        variables: {
          deleteReviewId: reviewId,
        },
        refetchQueries: [GET_CURRENT_USER, {
            variables: {
                includeReviews: true
            }
        },]
      });
      return result;
    };
  
    return { deleteReviewHook, result };
  };
  
  export default useDeleteReview;
  