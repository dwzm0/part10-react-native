import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from "react-router-native";
import SignInContainer from './SignInContainer';

const FormValues = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      if (data.authenticate.accessToken) {
        navigate("/")
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit}/>
};


export default FormValues;