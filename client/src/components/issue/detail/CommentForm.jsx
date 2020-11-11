import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import IssueItemHeader from './IssueItemHeader';
import { WriteLabel, IssueContent, IssueContentWrapper } from './IssueForm';
import FileContainer from './FileContainer';
import ContentButtonContainer from './ContentButtonContainer';
import GreenButton from '../../common/GreenButton';
import GreyButton from '../../common/GreyButton';
import svg from '../../../utils/svg';
import { IssueContext } from '../../../pages/IssueDetailPage';
import { patchIssue } from '../../../lib/axios/issue';

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
  const [content, setContent] = useState('');
  const [canSave, setCanSave] = useState(false);
  const { issue, setIssue } = useContext(IssueContext);

  const onChangeContent = (e) => {
    setContent(e.target.value);
    if (e.target.value.length > 0) setCanSave(true);
    else setCanSave(false);
  };
  const onClickChangeState = async () => {
    const changedState = issue.state === 'open' ? 'close' : 'open';
    await patchIssue(issue.id, { state: changedState });
    setIssue({ ...issue, state: changedState });
  };

  return (
    <CommentFormWrapper>
      <IssueItemHeader backgroundColor={'#f7f8fa'} />
      <IssueContentWrapper>
        <WriteLabel>Write</WriteLabel>
        <IssueContent
          placeholder={'Leave a comment'}
          onChange={onChangeContent}
          value={content}
        />
        <FileContainer />
        <ContentButtonContainer>
          {issue.state === 'open' ? (
            <CloseButton onClick={onClickChangeState}>
              {svg['closeLogo']}&nbsp;Close Issue
            </CloseButton>
          ) : (
            <GreyButton text={'Reopen issue'} func={onClickChangeState} />
          )}
          <GreenButton text={'Comment'} disabled={!canSave}></GreenButton>
        </ContentButtonContainer>
      </IssueContentWrapper>
    </CommentFormWrapper>
  );
};

export default CommentForm;
