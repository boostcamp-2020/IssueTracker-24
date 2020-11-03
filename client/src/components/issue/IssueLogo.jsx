import React from 'react';
import styled from 'styled-components';

const IssueLogoWrapper = styled.div`
   margin-left:10px;
`;

const IssueLogo = () =>{
  return(
    <IssueLogoWrapper>
    <svg width="16" height="16" className="issue-logo">
    <path
      fillRule="evenodd"
      d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
    ></path>
   </svg>
   </IssueLogoWrapper>
  );
}

export default IssueLogo;