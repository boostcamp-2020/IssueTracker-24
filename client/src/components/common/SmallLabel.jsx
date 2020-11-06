import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 15px;
  margin-right: 10px;
`;

const SmallLabel = ({ color }) => {
  return <Label color={color}></Label>;
};

export default SmallLabel;
