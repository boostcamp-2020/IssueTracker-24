import React, { useReducer } from 'react';
import IssuesContext from '../context/issues-context';
import IssueContainer from '../components/issue/IssueContainer';
import reducer from '../reducers/checked-issue-reducer';

const dummyIssues = [
  { id: '1', title: '리액트 환경설정' },
  { id: '2', title: 'express 환경설정' },
  { id: '3', title: 'webpack, babel 설정' },
];

const initialState = {
  checkedIssues: [],
};

const IssueListPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { issues: dummyIssues, dispatch };

  return (
    <IssuesContext.Provider value={value}>
      <IssueContainer />
    </IssuesContext.Provider>
  );
};

export default IssueListPage;
