import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../common/sidebar/Sidebar';
const Container = styled.div`
  display: flex;
  width: 29%;
  flex-direction: column;
  border: 1px solid black;
  min-height: 500px;
`;

const SideBarContainer = () => {
  return (
   <Container>
      <Sidebar></Sidebar>
   </Container>
  );
};

export default SideBarContainer;
