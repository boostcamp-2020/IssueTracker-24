import React from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';

const ContentWrapper = styled.div`
  width: 80%;
  height: 350px;
  margin: 0 auto;
  border: 1px solid #eaecef;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  div {
    margin: 14px 0;
  }
  svg {
    width: 32px;
    height: 32px;
    fill: #a3aab1;
  }
  h3 {
    margin: 14px 0;
    font-size: 24px;
    font-weight: 600;
  }
`;

const NoIssueContent = () => {
  return (
    <ContentWrapper>
      <div>{svg['bigExclamation']}</div>
      <h3>No results matched your search.</h3>
    </ContentWrapper>
  );
};

export default NoIssueContent;
