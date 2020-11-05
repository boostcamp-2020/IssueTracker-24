import React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import IssueNewImage from '../../components/issue/new/IssueNewImage';
import IssueNewContent from '../../components/issue/new/IssueNewContent';
import Sidebar from '../../components/issue/new/sidebar/Sidebar';

const IssueListNewPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  height: 500px;
  margin-top: 70px;
  margin-bottom: 40px;
  .content-wrapper {
    display: flex;
    flex-basis: 72%;
    width: 70%;
  }
`;

const IssueListNewPage = () => {
  return (
    <>
      <Header />
      <IssueListNewPageWrapper>
        <div class="content-wrapper">
          <IssueNewImage />
          <IssueNewContent />
        </div>
        <Sidebar />
      </IssueListNewPageWrapper>
    </>
  );
};

export default IssueListNewPage;
