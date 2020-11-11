import React, { useContext } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../common/ProfileImage';
import { IssueContext } from '../../../pages/IssueDetailPage';
import Issue from './Issue';
import Comment from './Comment';

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

const Line = styled.div`
  width: 15%;
  border-right: 2px solid #e8e9ec;
  height: 30px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IssueContainer = () => {
  const { issue } = useContext(IssueContext);

  return (
    <Container>
      <ContentWrapper>
        <ProfileImage image={issue.user.profile_image} size={42} />
        <Issue />
      </ContentWrapper>
      {issue.comments.map((comment) => {
        return (
          <CommentContainer key={'comment' + comment.id}>
            <Line />
            <ContentWrapper>
              <ProfileImage image={comment.user.profile_image} size={42} />
              <Comment comment={comment} />
            </ContentWrapper>
          </CommentContainer>
        );
      })}
    </Container>
  );
};

export default IssueContainer;
