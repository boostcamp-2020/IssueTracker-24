import React from 'react';
import styled from 'styled-components';

const WriteWrapper = styled.div`
  margin-bottom: 20px;
  background-color: #f6f8fa;
  border: 1px solid #eaecef;
  border-radius: 7px;
  height: 146px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const WriteContainer = ({ children }) => {
  return <WriteWrapper>{children}</WriteWrapper>;
};

export default WriteContainer;
