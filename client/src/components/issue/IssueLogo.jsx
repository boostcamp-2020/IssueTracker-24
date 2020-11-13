import React, { memo } from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';
const IssueLogoWrapper = styled.div`
  margin-left: 10px;
  fill: ${(props) => (props.state == 'open' ? 'green' : 'red')};
`;

const IssueLogo = memo(({ issueState }) => {
  return (
    <IssueLogoWrapper state={issueState}>
      {svg[`${issueState}Logo`]}
    </IssueLogoWrapper>
  );
});

export default IssueLogo;
