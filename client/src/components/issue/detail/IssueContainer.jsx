import React, { useContext } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../common/ProfileImage';
import { IssueContext } from '../../../pages/IssueDetailPage';
import Issue from './Issue';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { AppContext } from '../../../App';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 71%;
  padding-right: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const HorizonLine = styled.div`
  width: 15%;
  border-right: 2px solid #e8e9ec;
  height: 30px;
`;

const VerticalLine = styled.div`
  border-top: 2px solid #e8e9ec;
  height: 10px;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IssueContainer = () => {
  const { issue } = useContext(IssueContext);
  const { currentUser } = useContext(AppContext);
  return (
    <Container>
      <ContentWrapper>
        <ProfileImage image={issue.user.profile_image} size={42} />
        <Issue />
      </ContentWrapper>
      {issue.comments.map((comment) => {
        return (
          <CommentContainer key={'comment' + comment.id}>
            <HorizonLine />
            <ContentWrapper>
              <ProfileImage image={comment.user.profile_image} size={42} />
              <Comment comment={comment} />
            </ContentWrapper>
          </CommentContainer>
        );
      })}
      <HorizonLine />
      <VerticalLine />
      <ContentWrapper>
        <ProfileImage image={currentUser.profile_image} size={42} />
        <CommentForm />
      </ContentWrapper>
    </Container>
  );
};

export default IssueContainer;
