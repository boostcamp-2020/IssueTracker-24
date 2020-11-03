import React from 'react';
import IssuesContext from '../context/issues-context';
import IssueContainer from '../components/issue/IssueContainer';

const dummyIssues = [
  { id: '1', title: '리액트 환경설정' },
  { id: '2', title: 'express 환경설정' },
  { id: '3', title: 'webpack, babel 설정' },
];

const IssueListPage = () => {
  const value = { issues: dummyIssues };
  return (
    <IssuesContext.Provider value={value}>
      <IssueContainer />
    </IssuesContext.Provider>
  );
};

export default IssueListPage;
