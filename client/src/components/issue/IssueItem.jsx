import React from 'react';
import styled from 'styled-components';
import IssueLogo from './IssueLogo';
import IssueContent from './IssueContent';
const IssueItemWrapper = styled.div`
  width: 80%;
  height: 20%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #e9e9e9;
  }
  border-radius: 5px;
  border:1px solid #EAECEF;
`;
const IssueItem = ({ issue }) => {
  return (
    <>
      <IssueItemWrapper>
        <input type="checkbox" />
        <IssueLogo/>
        <IssueContent issue={issue}/>
      </IssueItemWrapper>
    </>
  );
};

export default IssueItem;
