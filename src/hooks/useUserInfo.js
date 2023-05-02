import { useQuery, useApolloClient } from '@apollo/client';
import { useNavigate } from "react-router-native"
import useAuthStorage from "./useAuthStorage"

import { GET_CURRENT_USER } from '../graphql/queries';

const useUserInfo = () => {
    const { data } = useQuery(GET_CURRENT_USER)

    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()
    const navigate = useNavigate()
    const signOut = async () => {
        await authStorage.removeAccessToken()
        apolloClient.resetStore()
        navigate('/')
    }

    return {data, signOut}
}

export default useUserInfo