import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { IssueContext } from '../../../pages/IssueDetailPage';

const IssueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`;

const IssueHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f1f8ff;
  border-radius: 4px 4px 0px 0px;
  border: 1px solid #e8e9ec;
  padding-left: 10px;
  padding-top: 10px;
  box-sizing: border-box;

  &:before {
    position: absolute;
    display: block;
    content: '';
    width: 0;
    height: 0;
    margin-left: -20px;
    margin-top: 11px;
    transform: scale(3);
    border-right-color: #e8e9ec;
    border-left-color: rgba(255, 255, 255, 0);
    border-top-color: rgba(255, 255, 255, 0);
    border-bottom-color: rgba(255, 255, 255, 0);
    border-style: solid solid outset;
  }
`;

const IssueContent = styled.textarea`
  width: 100%;
  border: 1px solid #e8e9ec;
  border-top: 0;
  border-radius: 0 0 4px 4px;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 15px;
  cursor: default;
  outline: 0;
  resize: none;
  overflow: hidden;
  white-space: pre-line;
`;

const Issue = () => {
  const { issue } = useContext(IssueContext);
  const issueContentRef = useRef();

  useEffect(() => {
    issueContentRef.current.style.height = `${issueContentRef.current.scrollHeight}px`;
  }, []);

  return (
    <IssueWrapper>
      <IssueHeader>MinsuKang commented 3 days ago</IssueHeader>
      <IssueContent
        readOnly={true}
        value={issue.content}
        ref={issueContentRef}
      ></IssueContent>
    </IssueWrapper>
  );
};

export default Issue;
