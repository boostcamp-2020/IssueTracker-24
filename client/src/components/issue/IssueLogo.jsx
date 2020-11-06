import React from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';
const IssueLogoWrapper = styled.div`
  margin-left: 10px;
  fill: green;
`;

const IssueLogo = ({ issue }) => {
  return <IssueLogoWrapper>{svg[`${issue.state}Logo`]}</IssueLogoWrapper>;
};

export default IssueLogo;
