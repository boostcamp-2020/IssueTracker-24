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

    .write-btn{
        width:70px;
        height:40px;
        border-radius:6px 6px 0 0;
        border:1px solid #E8E9EC;
        border-bottom:0px;
        margin-left:20px;
        background-color:#fff;
        z-index:1;
        cursor:pointer;
    }
    .write-content{
        border:1px solid #F4F4F6;
        margin-top:-2px;
        border-bottom:0px;
    }
    .main-content{
        margin-top:20px;
        margin-left:20px;
    }
`;
const IssueNewContent = () =>{
  return(
    <>
      <IssueNewContentWrapper>
      <IssueNewTitle/>
      <div className="tabnav-tabs">
          <button className="write-btn">Write</button>
      </div>
      <div className="write-content">
          <textarea className="main-content" cols="70" rows="15" placeholder="Leave a comment"></textarea>
      </div>
      </IssueNewContentWrapper>
    </>
  );
} 

export default IssueNewContent;