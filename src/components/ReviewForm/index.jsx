import  useAddReview  from '../../hooks/useAddReview'
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
    ownerName: '',
    repositoryName: '',
    rating: undefined,
    text: undefined,
  };

const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup.number().min(0).max(100).required('Rating is required'),
    text: yup.string().optional(),
});


const CreateReview = () => {
    const navigation = useNavigate()
    const [createReview] = useAddReview()

    const onSubmit = async (values) => {
        console.log('aim here')
        try{
            const result = await createReview(values)
            const id = result.data.createReview.repositoryId;
            navigation(`/repository/${id}`);
           
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => (
                 <View style={styles.formContainer}>
                 <View style={styles.fieldsContainer}>
                   <FormikTextInput name="ownerName" style={styles.field} placeholder="Repository owner name" />
                   <FormikTextInput name="repositoryName" style={styles.field} placeholder="Repository name"  />
                   <FormikTextInput name="rating" style={styles.field} placeholder="Rating between 0 and 100"  />
                   <FormikTextInput name="text" style={styles.field} placeholder="Review"  multiline/>
                 </View>
                 <Pressable onPress={handleSubmit} style={styles.buttonContainer} >
                     <Subheading style={styles.button}>Create Review</Subheading>
                 </Pressable>
             
                 </View>
            )}
        </Formik>
    )
}

export default CreateReview





    
    
  