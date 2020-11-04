import React, { useContext } from 'react';
import IssueItem from './IssueItem';
import { IssuesContext } from '../../pages/issue-list/IssueListPage';

const IssueContainer = () => {
  const { state } = useContext(IssuesContext);
  const { issues } = state;

  return issues.map((issue) => <IssueItem key={issue.id} issue={issue} />);
};

export default IssueContainer;
