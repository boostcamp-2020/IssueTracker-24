import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  background-color: ${(props) => props.color};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  margin-right: 10px;
`;

const SmallLabel = ({ color }) => {
  return <Label color={color}></Label>;
};

export default SmallLabel;
