import React, { useContext } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../common/ProfileImage';
import { IssueContext } from '../../../pages/IssueDetailPage';
import Issue from './Issue';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 71%;
  border: 1px solid black;
  min-height: 500px;
  padding-right: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const IssueContainer = () => {
  const { issue } = useContext(IssueContext);
  return (
    <Container>
      <ContentWrapper>
        <ProfileImage image={issue.user.profile_image} size={42} />
        <Issue />
      </ContentWrapper>
      ,
    </Container>
  );
};

export default IssueContainer;
