import React from 'react';
import styled from 'styled-components';

const IssueNewTitleWrapper = styled.input.attrs({
      type:'text',
})`
  width:90%;
  height:30px;
  border:1px solid #E8EAED;
  margin:20px 10px;
`;

const IssueNewTitle = () =>{
    return (
    <>
      <IssueNewTitleWrapper>
      </IssueNewTitleWrapper>
    </>
    );
}
export default IssueNewTitle;