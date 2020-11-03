import React from 'react';
import styled from 'styled-components';
import IssueLogo from './IssueLogo';
import IssueContent from './IssueContent';
const IssueItemWrapper = styled.div`
  width: 80%;
  height: 50px;
  font-size: 14px;
  display: flex;
  margin:0 auto;
  margin-top:-1px;
  padding:20px; 
  &:hover {
    background-color: #e9e9e9;
  }
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
