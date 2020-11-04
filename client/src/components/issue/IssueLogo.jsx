import React from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';
const IssueLogoWrapper = styled.div`
   margin-left:10px;
`;

const IssueLogo = () =>{
  return(
    <IssueLogoWrapper>
      {svg['IssuesLogo']}
   </IssueLogoWrapper>
  );
}

export default IssueLogo;