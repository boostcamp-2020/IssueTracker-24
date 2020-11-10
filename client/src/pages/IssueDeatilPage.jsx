import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import IssueDetailHeader from '../components/issue/detail/IssueDetailHeader';
import { getIssue } from '../lib/axios/issue';

const IssueDetailPageWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const initialIssue = {
  id: 0,
  title: '',
  content: '',
  state: '',
  created_at: new Date(),
  comments: [],
  labels: [],
  assignees: [],
  milestone: null,
  user: null,
};

const IssueDetailPage = ({ match }) => {
  const issueId = match.params.id;
  const [issue, setIssue] = useState(initialIssue);

  useEffect(async () => {
    setIssue(await getIssue(issueId));
  }, []);

  return (
    <>
      <Header />
      <IssueDetailPageWrapper>
        <IssueDetailHeader
          user={issue.user}
          commentsLength={issue.comments.length}
          title={issue.title}
          createdDate={issue.created_at}
          state={issue.state}
        />
      </IssueDetailPageWrapper>
    </>
  );
};

export default IssueDetailPage;
