import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import IssueDetailHeader from '../components/issue/detail/IssueDetailHeader';

const IssueDetailPageWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const IssueDetailPage = () => {
  return (
    <>
      <Header />
      <IssueDetailPageWrapper>
        <IssueDetailHeader />
      </IssueDetailPageWrapper>
    </>
  );
};

export default IssueDetailPage;
