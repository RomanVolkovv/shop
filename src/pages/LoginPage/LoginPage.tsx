import styled from './LoginPage.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import clsx from 'clsx';
import { validationSchemaLogin } from '../../utils/validation';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

//todo email or name

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  async function login(email: string, password: string) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaLogin}
      onSubmit={(value) => login(value.email, value.password)}>
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
