import React, { useContext } from 'react';
import IssueItem from './IssueItem';
import { IssuesContext } from '../../pages/issue-list/IssueListPage';
import NoIssueContent from './NoIssueContent';

const isExistRenderedIssues = (renderedIssues) => renderedIssues.length !== 0;

const IssueContainer = () => {
  const { state } = useContext(IssuesContext);
  const { renderedIssues } = state;

  return isExistRenderedIssues(renderedIssues) ? (
    renderedIssues.map((issue) => <IssueItem key={issue.id} issue={issue} />)
  ) : (
    <NoIssueContent />
  );
};

export default IssueContainer;
