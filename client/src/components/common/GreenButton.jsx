import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #2c974b;
  border: 0;
  color: #ffffff;
  border-radius: 4px;
  line-height: 35px;
  font-size: 14px;
  outline: 0;
  font-weight: bold;
  padding: 0px 15px 0px 15px;
  cursor: pointer;
  &:hover {
    background-color: #04c584;
  }
`;

const GreenButton = ({ text, func}) => {
  return (
    <>
      <Button onClick={func}>{text}</Button>
    </>
  );
};

export default GreenButton;
