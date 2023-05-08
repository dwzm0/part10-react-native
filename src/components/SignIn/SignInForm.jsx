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
  
 
 const SignInForm = ({onSubmit}) => {

    return (
      <View style={styles.formContainer}>
        <View style={styles.fieldsContainer}>
        <FormikTextInput name="username" style={styles.field} placeholder="username" />
        <FormikTextInput name="password" style={styles.field} placeholder="password" secureTextEntry />
        </View>
        <Pressable onPress={onSubmit} style={styles.buttonContainer} >
          <Subheading style={styles.button}>Sign In</Subheading>
        </Pressable>
      </View>
    )
  };


export default SignInForm  