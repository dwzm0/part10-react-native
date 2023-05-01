import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import useSignIn from '../hooks/useSignIn';
import { Formik } from 'formik';
import Subheading from './Subheading';
import { useNavigate } from "react-router-native";


const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('This field is required sir!'),
  password: yup.string().required('This field is required sir!'),
});

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 17,
    backgroundColor: "#e6eff7",
  },
  fieldsContainer: {
    paddingVertical: 20,
  },
  field: {
    width: 350,
    marginVertical: 6,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 350,
    backgroundColor: "#0f77d4",
    color: '#fff',
    flexGrow: 0,
    padding: 15,
    borderRadius: 5,
    textAlign: 'center',
  }
});

const SignInForm = ({onSubmit}) => {

  return (
    <View style={styles.formContainer}>
      <View style={styles.fieldsContainer}>
      <FormikTextInput name="username" style={styles.field} placeholder="username" />
      <FormikTextInput name="password" style={styles.field} placeholder="password" secureTextEntry />
      </View>
      <TouchableWithoutFeedback onPress={onSubmit} style={styles.buttonContainer} >
        <Subheading style={styles.button}>Sing in</Subheading>
      </TouchableWithoutFeedback>
    </View>
  )
};

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

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};


export default FormValues;