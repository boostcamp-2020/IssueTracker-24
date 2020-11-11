import React, { memo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import IssueItemHeader from './IssueItemHeader';
import { getTimeInfo } from '../../../utils/time';

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
  .timeInfo {
    color: grey;
  }
`;
const HeaderContent = styled.div`
  display: flex;
`;
const CommentContent = styled.textarea`
  width: 100%;
  border: 1px solid #e8e9ec;
  border-top: 0;
  border-radius: 0 0 4px 4px;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 15px;
  font-size: 15px;
  cursor: default;
  outline: 0;
  resize: none;
  overflow: hidden;
  white-space: pre-line;
`;

const Comment = memo(({ comment }) => {
  const commentContentRef = useRef();

  useEffect(() => {
    commentContentRef.current.style.height = `${commentContentRef.current.scrollHeight}px`;
  }, []);

  return (
    <CommentWrapper>
      <IssueItemHeader backgroundColor={'#f7f8fa'}>
        <HeaderContent>
          {comment.user.sns_id}&nbsp;
          <span className="timeInfo">
            commented {getTimeInfo(comment.created_at)}
          </span>
        </HeaderContent>
      </IssueItemHeader>
      <CommentContent
        readOnly={true}
        value={comment.content}
        ref={commentContentRef}
      ></CommentContent>
    </CommentWrapper>
  );
});

export default Comment;
