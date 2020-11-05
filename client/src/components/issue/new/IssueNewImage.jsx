import React from 'react';
import styled from 'styled-components';
const IssueNewImageWraaper = styled.div`
  .issue-profile {
    width: 30px;
    height: 30px;
    border-radius: 20px;
  }
`;
const IssueNewImage = () => {
  return (
    <>
      <IssueNewImageWraaper>
        <img alt="" className="issue-profile"></img>
      </IssueNewImageWraaper>
    </>
  );
};

export default IssueNewImage;
