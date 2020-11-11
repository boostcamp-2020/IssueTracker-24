import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LoginPage from './pages/LoginPage';
import IssueListPage from './pages/issue-list/IssueListPage';
import IssueNewPage from './pages/issue-new/IssueNewPage';
import NotFoundPage from './pages/NotFoundPage';
import MilestonePage from './pages/milestone-list/MilestonePage';
import LabelListPage from './pages/label-list/LabelListPage';
import { getToken } from './utils/token';
import { getCurrentUser } from './lib/axios/user';
import MilestoneNewPage from './pages/MilestoneNewPage';
import MilestoneEditPage from './pages/MilestoneEditPage';
import IssueDetailPage from './pages/IssueDeatilPage';

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
          <Route exact path="/issues/:id" component={IssueDetailPage} />
          <Route exact path="/milestones" component={MilestonePage} />
          <Route exact path="/milestones/new" component={MilestoneNewPage} />
          <Route
            exact
            path="/milestones/:id/edit"
            component={MilestoneEditPage}
          />
          <Route exact path="/labels" component={LabelListPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
