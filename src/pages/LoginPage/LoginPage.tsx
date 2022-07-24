import styled from './LoginPage.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import clsx from 'clsx';

//todo email or name

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = (values: any) => {
  console.log('Form data', values);
};

const validationSchema = Yup.object({
  email: Yup.string().email('invalid format').required('required field'),
  password: Yup.string().required('required field'),
});

const LoginPage = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
