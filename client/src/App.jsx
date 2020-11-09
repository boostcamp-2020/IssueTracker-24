import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LoginPage from './pages/LoginPage';
import IssueListPage from './pages/issue-list/IssueListPage';
import IssueNewPage from './pages/issue-new/IssueNewPage';
import NotFoundPage from './pages/NotFoundPage';
import { getToken } from './utils/token';
import { getCurrentUser } from './lib/axios/user';
import MilestoneNewPage from './pages/MilestoneNewPage';

const GlobalStyle = createGlobalStyle`
  body{
      background:#ffffff;
      margin:0;
      padding:0;
      padding-bottom: 100px;
  }
`;

export const AppContext = React.createContext();

const App = () => {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(async () => {
    const token = getToken();
    if (token) {
      const user = await getCurrentUser();
      setCurrentUser(user);
    }
  }, []);

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser }}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/issues" component={IssueListPage} />
          <Route exact path="/issues/new" component={IssueNewPage} />
          <Route exact path="/milestones/new" component={MilestoneNewPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
