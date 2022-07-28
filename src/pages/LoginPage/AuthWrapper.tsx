import React from 'react';
import { useAppSelector } from '../../hook';
import LoginPage from './LoginPage';
import RegistrationForm from './RegistrationPage';

const AuthWrapper = () => {
  const isAuthForm = useAppSelector((state) => state.switchAuthBtn.page);

  if (isAuthForm === 'signIn') {
    return (
      <div>
        <LoginPage />;
      </div>
    );
  }
  if (isAuthForm === 'signOn') {
    return (
      <div>
        <RegistrationForm />;
      </div>
    );
  }
};

export default AuthWrapper;
