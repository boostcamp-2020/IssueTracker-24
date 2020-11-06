import React from 'react';
import styled from 'styled-components';
const IssueNewImageWraaper = styled.div`
  .issue-profile {
    width: 50px;
    height: 50px;
    border-radius: 20px;
  }
`;
const IssueNewImage = () => {
  return (
    <>
      <IssueNewImageWraaper>
        <img
          src="https://user-images.githubusercontent.com/38288479/98277995-520fd400-1fdb-11eb-91bf-4317f37c093d.png"
          alt=""
          className="issue-profile"
        ></img>
      </IssueNewImageWraaper>
    </>
  );
};

export default IssueNewImage;
