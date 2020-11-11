import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import IssueDetailHeader from '../components/issue/detail/IssueDetailHeader';
import { getIssue } from '../lib/axios/issue';
import Spinner from '../components/common/Spinner';
import IssueContainer from '../components/issue/detail/IssueContainer';
import SidebarContainer from '../components/issue/detail/SidebarContainer';

const IssueDetailPageWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const IssueContext = React.createContext();

const IssueDetailPage = ({ match }) => {
  const issueId = match.params.id;
  const [issue, setIssue] = useState(null);

  useEffect(async () => {
    setIssue(await getIssue(issueId));
  }, []);

  if (!issue) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <IssueContext.Provider value={{ issue, setIssue }}>
        <IssueDetailPageWrapper>
          <IssueDetailHeader />
          <ContentWrapper>
            <IssueContainer />
            <SidebarContainer />
          </ContentWrapper>
        </IssueDetailPageWrapper>
      </IssueContext.Provider>
    </>
  );
};

export default IssueDetailPage;
