import React, { useContext } from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import { AppContext } from '../../App';
import IssueNewContent from '../../components/issue/new/IssueNewContent';
import Sidebar from '../../components/issue/new/sidebar/Sidebar';
import ProfileImage from '../../components/common/ProfileImage';

const IssueNewPageWrapper = styled.div`
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
  const { currentUser } = useContext(AppContext);
  return (
    <>
      <Header />
      <IssueNewPageWrapper>
        <div class="content-wrapper">
          <ProfileImage image={currentUser.profile_image} size={50} />
          <IssueNewContent />
        </div>
        <Sidebar />
      </IssueNewPageWrapper>
    </>
  );
};

export default IssueListNewPage;
