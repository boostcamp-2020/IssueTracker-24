import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: #2c974b;
  border: 0;
  color: #ffffff;
  border-radius: 4px;
  line-height: 35px;
  font-size: 14px;
  outline: 0;
  font-weight: bold;
  padding: 0px 15px 0px 15px;
  &:hover {
    background-color: #04c584;
  }
`;


const GreenButton = ({ text, func, disabled }) => {
  return (
    <>
      <Button onClick={func} disabled={disabled}>
        {text}
      </Button>
    </>
  );
};

export default GreenButton;
