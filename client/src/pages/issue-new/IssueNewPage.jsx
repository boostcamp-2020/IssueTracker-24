import React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import IssueNewImage from '../../components/issue/new/IssueNewImage';
import IssueNewContent from '../../components/issue/new/IssueNewContent';
const IssueNewPageWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  height: 500px;
  margin-top: 70px;
  margin-bottom: 40px;
`;

const IssueListNewPage = () => {
  return (
    <>
      <Header />
      <IssueNewPageWrapper>
        <IssueNewImage />
        <IssueNewContent />
      </IssueNewPageWrapper>
    </>
  );
};

export default IssueListNewPage;
