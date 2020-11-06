import React from 'react';
import LoginContainer from '../components/login/login-container/LoginContainer';
import LoginFormContainer from '../components/login/login-form/LoginForm';

const LoginPage = () => {
  return (
    <>
      <LoginContainer>
        <LoginFormContainer />
      </LoginContainer>
    </>
  );
};

export default LoginPage;
