import React, { useContext } from 'react';
import IssueItem from './IssueItem';
import IssuesContext from '../../context/issues-context';

const IssueContainer = () => {
  const { issues } = useContext(IssuesContext);
  return issues.map((issue) => <IssueItem key={issue.id} issue={issue} />);
};

export default IssueContainer;
