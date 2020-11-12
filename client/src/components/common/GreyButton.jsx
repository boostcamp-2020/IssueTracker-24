import React, { memo } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #fafbfc;
  border: 1.5px solid #eaecef;
  border-radius: 4px;
  height: 35px;
  font-size: 14px;
  outline: 0;
  font-weight: bold;
  padding: 0px 15px 0px 15px;
  cursor: pointer;
  color: ${(props) => (props.color ? props.color : 'black')};
  &: hover {
    background-color: #f3f4f6;
  }
`;

const GreyButton = memo(({ text, func, color }) => {
  return (
    <>
      <Button onClick={func} color={color}>
        {text}
      </Button>
    </>
  );
});

export default GreyButton;
