import React from 'react';
import styled from 'styled-components';
import IssueItemHeader from './IssueItemHeader';
import { WriteLabel, IssueContent, IssueContentWrapper } from './IssueForm';
import FileContainer from './FileContainer';
import ContentButtonContainer from './ContentButtonContainer';
import GreenButton from '../../common/GreenButton';
import svg from '../../../utils/svg';

const CommentFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`;

const CloseButton = styled.button`
  background-color: #fafbfc;
  border: 1.5px solid #eaecef;
  border-radius: 4px;
  height: 35px;
  font-size: 14px;
  outline: 0;
  font-weight: bold;
  padding: 0px 15px 0px 15px;
  cursor: pointer;
  color: black;
  svg {
    fill: red;
  }
`;

const CommentForm = () => {
  return (
    <CommentFormWrapper>
      <IssueItemHeader backgroundColor={'#f7f8fa'} />
      <IssueContentWrapper>
        <WriteLabel>Write</WriteLabel>
        <IssueContent placeholder={'Leave a comment'} />
        <FileContainer />
        <ContentButtonContainer>
          <CloseButton>{svg['closeLogo']}&nbsp;Close Issue</CloseButton>
          <GreenButton text={'Comment'}></GreenButton>
        </ContentButtonContainer>
      </IssueContentWrapper>
    </CommentFormWrapper>
  );
};

export default CommentForm;
