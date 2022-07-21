import styled from './LoginPage.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

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
    <Formik
      className={styled.login_wrapper}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor='name'>E-mail</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='name' component={TextError} />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <Field type='password' id='password' name='password' />
          <ErrorMessage name='password' component={TextError} />
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
