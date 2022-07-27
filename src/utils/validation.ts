import * as Yup from 'yup';

const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
const phoneRegExp = /^(?:\+38)?(0\d{9})$/;

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email('The email is incorrect').required('Required field'),
  password: Yup.string()
    .matches(passwordRegex, 'Password must be made up of upper and lower case letters and numbers')
    .required('Required field'),
});

export const validationSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Your name is too short, min 2 symbols')
    .max(20, 'Your name is too long, max 32 symbols')
    .required('Please enter your name'),
  email: Yup.string().email('The email is incorrect').required('Please enter your email'),
  password: Yup.string()
    .matches(passwordRegex, 'Password must be made up of upper and lower case letters and numbers')
    .required('Please enter your password'),
  confPassword: Yup.string()
    .matches(passwordRegex, 'Password must be made up of upper and lower case letters and numbers')
    .required('Please confirm your password')
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same'),
    }),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});
