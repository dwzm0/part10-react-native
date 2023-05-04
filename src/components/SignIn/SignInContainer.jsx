import SignInForm from './SignInForm'    
import * as yup from 'yup';
import { Formik } from 'formik';

const initialValues = {
    username: '',
    password: '',
  };

const validationSchema = yup.object().shape({
    username: yup.string().required('This field is required sir!'),
    password: yup.string().required('This field is required sir!'),
});

const SignInContainer = ({onSubmit}) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
        >
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      );
}

export default SignInContainer