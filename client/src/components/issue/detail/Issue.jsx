import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { IssueContext } from '../../../pages/IssueDetailPage';
import { getTimeInfo } from '../../../utils/time';
import IssueItemHeader from './IssueItemHeader';

const IssueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  .grey {
    color: grey;
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
      <IssueItemHeader>
        <HeaderContent>
          <div>{issue.user.sns_id}</div>&nbsp;
          <div class="grey">commented {getTimeInfo(issue.created_at)}</div>
        </HeaderContent>
      </IssueItemHeader>
      <IssueContent
        readOnly={true}
        value={issue.content}
        ref={issueContentRef}
      ></IssueContent>
    </IssueWrapper>
  );
};

export default Issue;
