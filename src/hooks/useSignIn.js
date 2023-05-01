import { useMutation, useApolloClient } from '@apollo/client';
import  useAuthStorage  from './useAuthStorage';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
    const [mutate, {data}] = useMutation(SIGN_IN);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient()
  
    const signIn = async ({ username, password }) => {
      const response = await mutate({ 
        variables: {credentials: {username, password}}
      })
      console.log(response)
      if (response) {
        await authStorage.setAccessToken(response.data?.authenticate?.accessToken)
        console.log("Token is saved: ", await authStorage.getAccessToken())

        apolloClient.resetStore();
      }
      return response
    };
    return [signIn, data];
  };

export default useSignIn;