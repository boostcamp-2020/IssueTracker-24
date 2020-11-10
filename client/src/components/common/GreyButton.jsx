import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #fafbfc;
  border: 1px solid #eaecef;
  border-radius: 4px;
  height: 35px;
  font-size: 14px;
  outline: 0;
  font-weight: bold;
  padding: 0px 15px 0px 15px;
  cursor: pointer;
`;

const GreyButton = ({ text, func }) => {
  return (
    <>
      <Button onClick={func}>{text}</Button>
    </>
  );
};

export default GreyButton;
