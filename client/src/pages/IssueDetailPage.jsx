import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import IssueDetailPageHeader from '../components/issue/detail/IssueDetailPageHeader';
import { getIssue } from '../lib/axios/issue';
import {getAllLabels} from '../lib/axios/label';
import {getAllMilestones} from '../lib/axios/milestone';
import {getAllUsers} from '../lib/axios/user';
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
  const [assignee, setAssignee] = useState(null);
  const [milestone, setMilestone] = useState(null);
  const [label, setLabel] = useState(null);
  useEffect(async () => {
    setIssue(await getIssue(issueId));
    setAssignee(await getAllUsers());
    setLabel(await getAllLabels());
    setMilestone(await getAllMilestones());
  }, []);

  if (!issue) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <IssueContext.Provider value={{ issue, setIssue, assignee, setAssignee, label, setLabel, milestone, setMilestone}}>
        <IssueDetailPageWrapper>
          <IssueDetailPageHeader />
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
