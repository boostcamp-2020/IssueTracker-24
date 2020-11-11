import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import IssueItemHeader from './IssueItemHeader';
import { IssueContext } from '../../../pages/IssueDetailPage';
import ContentButtonContainer from './ContentButtonContainer';
import GreenButton from '../../common/GreenButton';
import GreyButton from '../../common/GreyButton';
import { patchIssue } from '../../../lib/axios/issue';

const IssueContentWrapper = styled.div`
  width: 100%;
  border: 1px solid #e8e9ec;
  border-top: 0;
  border-radius: 0 0 4px 4px;
  box-sizing: border-box;
  padding: 20px;
  font-size: 15px;
`;

const IssueContent = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  box-sizing: border-box;
  border: 1px solid #eaecef;
  border-radius: 4px;
  background-color: #fafbfc;
  font-size: 15px;
  &:focus {
    outline: none;
    border: 0.5px solid #0366d6;
    border-radius: 0 4px 4px 0;
    box-shadow: 0px 0px 2.5px 2.5px #b3d1f3;
  }
`;

const FileContainer = styled.div`
  width: 100%;
`;
const InputFile = styled.input.attrs({
  type: 'file',
})`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const FileText = styled.label`
  cursor: pointer;
  color: grey;
  display: block;
  height: 25px;
  border: 1px solid #eaecef;
  border-radius: 4px;
  font-size: 14px;
`;
const IssueForm = ({ onClickCancel }) => {
  const [content, setContent] = useState('');
  const { issue, setIssue } = useContext(IssueContext);
  useEffect(() => {
    setContent(issue.content);
  }, []);

  const onChangeContent = (e) => setContent(e.target.value);

  const onClickUpdate = async () => {
    await patchIssue(issue.id, { content });
    setIssue({ ...issue, content });
    onClickCancel();
  };

  return (
    <>
      <IssueItemHeader />
      <IssueContentWrapper>
        <IssueContent value={content} onChange={onChangeContent} />
        <FileContainer>
          <FileText htmlFor={'file'}>Attach files by clicking here.</FileText>
          <InputFile id={'file'} />
        </FileContainer>
        <ContentButtonContainer>
          <GreyButton text={'Cancel'} color={'red'} func={onClickCancel} />
          <GreenButton text={'Update comment'} func={onClickUpdate} />
        </ContentButtonContainer>
      </IssueContentWrapper>
    </>
  );
};

export default IssueForm;
