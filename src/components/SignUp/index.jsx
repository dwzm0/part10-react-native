import useSingUp from "../../hooks/useSignUp";
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from "react-router-native";
import * as yup from 'yup';
import { Formik } from 'formik';
import FormikTextInput from '../FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import Subheading from '../Subheading';

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

const initialValues = {
    username: undefined,
    password: undefined,
    passwordConfirm: undefined,
};

const validationSchema = yup.object().shape({
    username: yup.string()
                        .min(1, 'Password must be at least 1 characters.')
                        .max(30, 'Password must be at least 30 characters.')
                        .required('Username owner is required'),
    password: yup.string()
                        .min(5, 'Password must be at least 5 characters.')
                        .max(30, 'Password must be at least 30 characters.')
                        .required('Password name is required'),
    passwordConfirm: yup.string()
                               .oneOf([yup.ref('password'), null])
                               .required('Password confirm is required')
});


const SignUp = () => {
    const navigation = useNavigate()
    const [signUp] = useSingUp() 
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        try {
            await signUp(values)
            const { data } = await signIn(values);
                if (data.authenticate.accessToken) {
                    navigation("/")
                }
    } catch (e) {
      console.log(e);
    }
}
    
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => (
                 <View style={styles.formContainer}>
                 <View style={styles.fieldsContainer}>
                   <FormikTextInput name="username" style={styles.field} placeholder="Username" />
                   <FormikTextInput name="password" style={styles.field} placeholder="Password"  />
                   <FormikTextInput name="passwordConfirm" style={styles.field} placeholder="Confirm password"  />
                 </View>
                 <Pressable onPress={handleSubmit} style={styles.buttonContainer} >
                     <Subheading style={styles.button}>Sign Up</Subheading>
                 </Pressable>
                 </View>
            )}
        </Formik>
    )

}

export default SignUp