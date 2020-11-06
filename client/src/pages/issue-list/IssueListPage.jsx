import React, { useEffect, useReducer } from 'react';
import IssueContainer from '../../components/issue/IssueContainer';
import Header from '../../components/Header';
import reducer from './reducer';
import MenuContainer from '../../components/issue/MenuContainer';
import { getAllIssues } from '../../lib/axios/issue';
import { getAllLabels } from '../../lib/axios/label';
import { getAllMilestones } from '../../lib/axios/milestone';
import { getCurrentUser, getAllUsers } from '../../lib/axios/user';
import { INIT_DATA } from '../../pages/issue-list/reducer';
import ToolBarContainer from '../../components/issue/ToolBarContainer';
export const IssuesContext = React.createContext();

const initialState = {
  wholeCheck: false,
  currentUser: null,
  renderedIssues: [],
  issues: [],
  labels: [],
  milestones: [],
  users: [],
};

const IssueListPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(async () => {
    const [issues, labels, milestones, currentUser, users] = await Promise.all([
      getAllIssues(),
      getAllLabels(),
      getAllMilestones(),
      getCurrentUser(),
      getAllUsers(),
    ]);
    // TODO
    //const users = await getData('users');
    dispatch({
      type: INIT_DATA,
      data: { issues, labels, milestones, currentUser, users },
    }); // TODO: add users
  }, []);

  return (
    <IssuesContext.Provider value={{ state, dispatch }}>
      <Header />
      <MenuContainer />
      <ToolBarContainer />
      <IssueContainer />
    </IssuesContext.Provider>
  );
};

export default IssueListPage;
