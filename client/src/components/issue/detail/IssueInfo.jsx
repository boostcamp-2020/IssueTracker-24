import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import IssueItemHeader from './IssueItemHeader';
import { IssueContext } from '../../../pages/IssueDetailPage';
import { getTimeInfo } from '../../../utils/time';

const HeaderContent = styled.div`
  display: flex;
  .grey {
    color: grey;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  .author {
    outline: 0;
    border: 1px solid grey;
    height: 27px;
    box-sizing: border-box;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 10px;
    border-radius: 10px;
  }
  .edit {
    cursor: pointer;
    margin-left: 10px;
    height: 27px;
    &:hover {
      text-decoration: underline;
      color: blue;
    }
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
  padding-bottom: 15px;
  font-size: 14px;
  cursor: default;
  outline: 0;
  resize: none;
  overflow: hidden;
  white-space: pre-line;
  font-family: sans;
`;

const IssueInfo = ({ onClickEdit }) => {
  const { issue } = useContext(IssueContext);
  const issueContentRef = useRef();

  useEffect(() => {
    issueContentRef.current.style.height = `${issueContentRef.current.scrollHeight}px`;
  }, []);

  return (
    <>
      <IssueItemHeader>
        <HeaderContent>
          <div>{issue.user.sns_id}</div>&nbsp;
          <div className="grey">commented {getTimeInfo(issue.created_at)}</div>
        </HeaderContent>
        <ButtonWrapper>
          <div className="author">Author</div>
          <div className="edit" onClick={onClickEdit}>
            Edit
          </div>
        </ButtonWrapper>
      </IssueItemHeader>
      <IssueContent
        readOnly={true}
        value={issue.content}
        ref={issueContentRef}
      ></IssueContent>
    </>
  );
};

export default IssueInfo;
