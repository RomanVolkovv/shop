import styled from './LoginPage.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import clsx from 'clsx';
import { validationSchemaLogin } from '../../utils/validation';
import { auth } from '../../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

//todo email or name

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = (values: any) => {
  console.log('Form data', values);
};

const LoginPage = () => {
  function zzz(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaLogin}
      onSubmit={(value) => zzz(value.email, value.password)}>
      <Form className={styled.form_wrapper}>
        <div className={clsx(styled.input_form, styled.email)}>
          <Field placeholder='email' type='email' id='email' name='email' />
          <ErrorMessage name='email' component={TextError} />
        </div>

        <div className={clsx(styled.input_form, styled.password)}>
          <Field placeholder='password' type='password' id='password' name='password' />
          <ErrorMessage name='password' component={TextError} />
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
