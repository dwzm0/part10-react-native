import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations'

const useAddReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async({ ownerName, repositoryName, rating, text }) => {
        const result = await mutate({
            variables: {
                review: { ownerName, rating: Number(rating), repositoryName, text },
            },
        })
        console.log(result)
        return result
    }
    return [createReview, result]
}

export default useAddReview
