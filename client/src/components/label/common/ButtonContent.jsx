import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 0px;
  flex-basis: 34%;
  button {
    height: 35px;
    margin-left: 10px;
  }
`;

const ButtonContent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ButtonContent;
