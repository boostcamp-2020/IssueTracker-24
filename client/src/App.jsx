import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LoginContainer from './components/login/loginContainer';
const GlobalStyle = createGlobalStyle`
  body{
      background:#e9ecef;
  }
`;
export default () => {
 return(
  <>
    <GlobalStyle/>
    <LoginContainer>이슈 트래커</LoginContainer>
  </>
 );

}
