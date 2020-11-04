import React from 'react';
import styled from 'styled-components';
import IssueNewTitle from './IssueNewTitle';
const IssueNewContentWrapper = styled.div`
    width:50%;
    height:500px;
    background-color:#ffffff;
    border-radius:4px;
    border:1px solid #E8E9EC;
    margin-left:50px;
    &:before{
        position:absolute;
        display:block;
        content: "";
        width:0;
        height:0;
        margin-left:-12px;
        margin-top:30px;
        transform: scale(3) rotate(-90deg);
        border-color:rgba(255,255,255,1) transparent;
        border-style:solid solid outset;
      }
`;
const IssueNewContent = () =>{
  return(
    <>
      <IssueNewContentWrapper>
      <IssueNewTitle/>
      </IssueNewContentWrapper>
    </>
  );
} 

export default IssueNewContent;