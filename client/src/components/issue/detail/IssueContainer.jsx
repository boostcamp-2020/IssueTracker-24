import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.73;
  border: 1px solid black;
  min-height: 500px;
`;

const IssueContainer = () => {
  return <Container></Container>;
};

export default IssueContainer;
