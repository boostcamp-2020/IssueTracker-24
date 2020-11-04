import React from 'react';
import styled from 'styled-components';
const IssueNewImageWraaper = styled.div`
 .issue-profile{
     width:30px;
     height:30px;
     border-radius:20px;
 }
`;
const IssueNewImage = () =>{
  return (
    <>
      <IssueNewImageWraaper>
      <img alt="프로필사진"className="issue-profile"></img>
      </IssueNewImageWraaper>
    </>
  );
}

export default IssueNewImage;