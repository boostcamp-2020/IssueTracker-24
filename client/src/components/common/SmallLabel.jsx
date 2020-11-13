import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.size || 16}px;
  height: ${(props) => props.size || 16}px;
  border-radius: 8px;
  margin-right: 10px;
  margin-top: ${(props) => props.marginTop || 0}px;
`;

const SmallLabel = ({ color, size, marginTop }) => {
  return <Label color={color} size={size} marginTop={marginTop}></Label>;
};

export default SmallLabel;
