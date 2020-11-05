import React, { useEffect, useReducer } from 'react';
import IssueContainer from '../../components/issue/IssueContainer';
import Header from '../../components/Header';
import reducer from './reducer';
import MenuContainer from '../../components/issue/MenuContainer';
import { getAllIssues } from '../../lib/axios/issue';
import { getAllLabels } from '../../lib/axios/label';
import { getAllMilestones } from '../../lib/axios/milestone';
import { getCurrentUser } from '../../lib/axios/user';
import { INIT_DATA } from '../../pages/issue-list/reducer';
import ToolBarContainer from '../../components/issue/ToolBarContainer';
export const IssuesContext = React.createContext();

const initialState = {
  wholeCheck: false,
  currentUser: null,
  checkedIssues: [],
  renderedIssues: [],
  issues: [],
  labels: [],
  milestones: [],
  users: [
    { id: 1, sns_id: 'qkrrlgh519' },
    { id: 2, sns_id: 'mu1616' },
    { id: 3, sns_id: 'jch422' },
    { id: 4, sns_id: 'thdwlsgus0' },
  ],
};

const IssueListPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    const issues = await getAllIssues();
    const labels = await getAllLabels();
    const milestones = await getAllMilestones();
    const checkedIssues = issues.map((issue) => ({
      id: issue.id,
      checked: false,
    }));
    const currentUser = await getCurrentUser();
    // TODO
    //const users = await getData('users');
    dispatch({
      type: INIT_DATA,
      data: { issues, labels, milestones, checkedIssues, currentUser },
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
