import { useMutation } from '@apollo/client';
import { SING_UP } from '../graphql/mutations';

const  useSingUp = () => {
  const [mutate, result] = useMutation(SING_UP);

  const signUp = async ({ username, password }) => {
    const result = await mutate({
      variables: {
        user: { username, password },
      },
    });
    return result;
  };

  return [signUp, result];
}

export default useSingUp;