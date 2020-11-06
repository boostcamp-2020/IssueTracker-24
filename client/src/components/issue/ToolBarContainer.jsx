import React from 'react';
import styled from 'styled-components';
import ToolBar from './toolbar/ToolBar';

const Div = styled.div`
  width: 80%;
  height: 65px;
  font-size: 14px;
  display: flex;
  margin: 0 auto;
  padding: 20px;
  background-color: #e9e9e9;
  border: 1px solid #eaecef;
  box-sizing: border-box;
`;

const ToolBarContainer = () => {
  return (
    <>
      <Div>
        <ToolBar />
      </Div>
    </>
  );
};

export default ToolBarContainer;
