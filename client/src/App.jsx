import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LoginPage from './pages/LoginPage';
import IssueListPage from './pages/issue-list/IssueListPage';
import IssueListNewPage from './pages/issue-new/IssueListNewPage';
import NotFoundPage from './pages/NotFoundPage';

const GlobalStyle = createGlobalStyle`
  body{
      background:#ffffff;
      margin:0;
      padding:0;
      padding-bottom: 100px;
  }
`;
export default () => (
  <>
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/issues" component={IssueListPage} />
        <Route exact path="/issues/new" component={IssueListNewPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </>
);
