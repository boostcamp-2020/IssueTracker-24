import React, { useEffect, useReducer } from 'react';
import IssueContainer from '../../components/issue/IssueContainer';
import Header from '../../components/Header';
import reducer from './reducer';
import MenuContainer from '../../components/issue/MenuContainer';
import { getData } from '../../lib/request';
import { INIT_DATA } from '../../pages/issue-list/reducer';

export const IssuesContext = React.createContext();

const initialState = {
  checkedIssues: [],
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
    let issues = await getData('issues');
    let labels = await getData('labels');
    let milestones = await getData('milestones');
    // TODO
    //const users = await getData('users');
    dispatch({ type: INIT_DATA, data: { issues , labels, milestones } }); // TODO: add users
  }, []);

  return (
    <IssuesContext.Provider value={{ state, dispatch }}>
      <Header />
      <MenuContainer />
      <IssueContainer />
    </IssuesContext.Provider>
  );
};

export default IssueListPage;
