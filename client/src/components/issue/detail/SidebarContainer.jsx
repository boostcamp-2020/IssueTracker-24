import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-grow: 0.27;
  flex-direction: column;
  border: 1px solid black;
  min-height: 500px;
`;

const SideBarContainer = () => {
  return <Container></Container>;
};

export default SideBarContainer;
