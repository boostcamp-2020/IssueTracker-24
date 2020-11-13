import React from 'react';
import styled from 'styled-components';
import { getContrastYIQ } from '../../utils/color.js';

const LabelWrapper = styled.button`
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  border: none;
  height: 22px;
  cursor: pointer;
  border-radius: 360px;
  font-weight: bold;
  margin-left: 5px;
  outline: 0;
  padding-left: 10px;
  padding-right: 10px;
`;

const Label = ({ label }) => {
  const { id, title, color } = label;
  const textColor = getContrastYIQ(color);
  return (
    <>
      <LabelWrapper key={'label' + id} color={color} textColor={textColor}>
        <div>{title}</div>
      </LabelWrapper>
    </>
  );
};

export default Label;
