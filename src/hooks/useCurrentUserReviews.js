import { useQuery } from '@apollo/client';

import { GET_CURRENT_USER } from '../graphql/queries';

const useCurrentUserReviews = () => {
    const { data } = useQuery(GET_CURRENT_USER, {
        variables: {
            includeReviews: true
        }
    })
    return data
}

export default useCurrentUserReviews