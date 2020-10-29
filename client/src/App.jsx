import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LoginContainer from './components/login/loginContainer';
import LoginFormContainer from './components/login/loginForm/loginForm';
import githubButton from './components/login/githubButton/githubButton';

const GlobalStyle = createGlobalStyle`
  body{
      background:#e9ecef;
  }
`;
export default () => {
 return(
  <>
    <GlobalStyle/>
    <LoginContainer>
        <LoginFormContainer>
        </LoginFormContainer>
    </LoginContainer>
  </>
 );

}
