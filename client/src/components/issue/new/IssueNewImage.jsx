import React from 'react';
import styled from 'styled-components';
const IssueNewImageWraaper = styled.div`
`;

const IssueProfile = styled.img.attrs({
  src:"https://user-images.githubusercontent.com/38288479/98277995-520fd400-1fdb-11eb-91bf-4317f37c093d.png",
  alt:"",
})`
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;
const IssueNewImage = () => {
  return (
    <>
      <IssueNewImageWraaper>
        <IssueProfile/>
      </IssueNewImageWraaper>
    </>
  );
};

export default IssueNewImage;
