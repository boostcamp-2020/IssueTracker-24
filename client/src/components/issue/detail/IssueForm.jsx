import React from 'react';
import styled from 'styled-components';
import IssueItemHeader from './IssueItemHeader';

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
  border: 1px solid #eaecef;
  border-radius: 4px;
  background-color: #fafbfc;
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
  min-width: 300px;
  height: 25px;
  border: 1px solid #eaecef;
  border-radius: 4px;
  font-size: 14px;
`;
const IssueForm = () => {
  return (
    <>
      <IssueItemHeader />
      <IssueContentWrapper>
        <IssueContent />
        <FileContainer>
          <FileText htmlFor={'file'}>Attach files by clicking here.</FileText>
          <InputFile id={'file'} />
        </FileContainer>
      </IssueContentWrapper>
    </>
  );
};

export default IssueForm;
