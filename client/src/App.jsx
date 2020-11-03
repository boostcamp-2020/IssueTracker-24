import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LoginPage from './pages/LoginPage';
import IssueListPage from './pages/IssueListPage';
import NotFoundPage from './pages/NotFoundPage';

const GlobalStyle = createGlobalStyle`
  body{
      background:#ffffff;
  }
`;
export default () => (
  <>
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/issues" component={IssueListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </>
);
