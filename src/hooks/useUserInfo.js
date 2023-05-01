import { useQuery, useApolloClient } from '@apollo/client';
import { useNavigate } from "react-router-native"
import useAuthStorage from "./useAuthStorage"

import { GET_ME } from '../graphql/queries';

const useUserInfo = () => {
    const {data, loading} = useQuery(GET_ME)

    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()
    const navigate = useNavigate()
    const signOut = async () => {
        await authStorage.removeAccessToken()
        apolloClient.resetStore()
        navigate('/')
    }

    return {data, loading, signOut}
}

export default useUserInfo