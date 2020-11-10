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
export const IssueContext = React.createContext();

const IssueDetailPage = ({ match }) => {
  const issueId = match.params.id;
  const [issue, setIssue] = useState(null);

  useEffect(async () => {
    setIssue(await getIssue(issueId));
  }, []);

  if (!issue) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <IssueContext.Provider value={{ issue: issue }}>
        <IssueDetailPageWrapper>
          <IssueDetailHeader />
        </IssueDetailPageWrapper>
      </IssueContext.Provider>
    </>
  );
};

export default IssueDetailPage;
