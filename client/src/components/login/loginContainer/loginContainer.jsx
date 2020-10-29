import React from 'react';
import styled from 'styled-components';
import './LoginContainer.scss';

const LoginContainer = ({ children }) => (
  <>
    <div className="login-block">
      <div className="login-title">이슈 트래커</div>
      {children}
    </div>
  </>
);

export default LoginContainer;
