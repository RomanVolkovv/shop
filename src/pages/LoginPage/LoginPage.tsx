import styled from './LoginPage.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import clsx from 'clsx';
import { validationSchemaLogin } from '../../utils/validation';

//todo email or name

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = (values: any) => {
  console.log('Form data', values);
};

const LoginPage = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaLogin}
      onSubmit={onSubmit}>
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
