import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../common/sidebar/Sidebar';
const Container = styled.div`
  display: flex;
  width: 29%;
  flex-direction: column;
  padding-left: 5%;
  color: #586069;
  font-size: 13px;
`;

const SideBarContainer = () => {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
};

export default SideBarContainer;
