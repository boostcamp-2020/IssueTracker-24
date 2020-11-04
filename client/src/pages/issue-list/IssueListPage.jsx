import React, { useReducer } from 'react';
import IssueContainer from '../../components/issue/IssueContainer';
import Header from '../../components/Header';
import reducer from './reducer';
import MenuContainer from '../../components/issue/MenuContainer';

export const IssuesContext = React.createContext();

const dummyIssues = [
  {
    id: '1',
    title: '리액트 환경설정',
    labels: [
      { id: 1, title: 'bug', color: '#f9d0c4' },
      { id: 2, title: 'refactor', color: '#fcc7f5' },
    ],
  },
  {
    id: '2',
    title: 'express 환경설정',
    labels: [
      { id: 1, title: 'bug', color: '#f9d0c4' },
      { id: 3, title: 'Must', color: '#028e87' },
    ],
  },
  {
    id: '3',
    title: 'webpack, babel 설정',
    labels: [
      { id: 1, title: 'bug', color: '#f9d0c4' },
      { id: 2, title: 'refactor', color: '#fcc7f5' },
    ],
  },
];

const initialState = {
  checkedIssues: [],
  issues: dummyIssues,
  labels: [
    { id: 1, title: 'bug', color: '#f9d0c4' },
    { id: 2, title: 'refactor', color: '#fcc7f5' },
    { id: 3, title: 'Must', color: '#028e87' },
    { id: 4, title: 'frontend', color: '#AAED8B' },
  ],
  milestones: [
    { id: 1, title: 'week-1' },
    { id: 2, title: 'week-2' },
    { id: 3, title: 'week-3' },
  ],
};

const IssueListPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <IssuesContext.Provider value={{ state, dispatch }}>
      <Header />
      <MenuContainer />
      <IssueContainer />
    </IssuesContext.Provider>
  );
};

export default IssueListPage;
