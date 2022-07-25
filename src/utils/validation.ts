import * as Yup from 'yup';

const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
const phoneRegExp = /^(?:\+38)?(0\d{9})$/;

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email('The email is incorrect').required('Required field'),
  password: Yup.string()
    .matches(passwordRegex, 'Password must be made up of upper and lower case letters and numbers')
    .required('Required field'),
});
