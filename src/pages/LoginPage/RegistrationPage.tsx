import styled from './LoginPage.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import clsx from 'clsx';
import { validationSchemaLogin } from '../../utils/validation';
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

const RegistrationForm = () => {
  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  async function register(email: string, password: string, name: string, phoneNumber: string) {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function logout() {
    await signOut(auth);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaLogin}
      onSubmit={(value) => register(value.email, value.password, value.name, value.phoneNumber)}>
      <Form className={styled.form_wrapper}>
        <div className={clsx(styled.input_form, styled.name)}>
          <Field placeholder='name' type='text' id='name' name='name' />
          <ErrorMessage name='name' component={TextError} />
        </div>

        <div className={clsx(styled.input_form, styled.email)}>
          <Field placeholder='email' type='email' id='email' name='email' />
          <ErrorMessage name='email' component={TextError} />
        </div>

        <div className={clsx(styled.input_form, styled.phone)}>
          <Field placeholder='phone' type='text' id='phone' name='phone' />
          <ErrorMessage name='phone' component={TextError} />
        </div>

        <div className={clsx(styled.input_form, styled.password)}>
          <Field placeholder='password' type='password' id='password' name='password' />
          <ErrorMessage name='password' component={TextError} />
        </div>

        <div className={clsx(styled.input_form, styled.password)}>
          <Field
            placeholder='confirm password'
            type='password'
            id='confirmPassword'
            name='confirmPassword'
          />
          <ErrorMessage name='confirmPassword' component={TextError} />
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
