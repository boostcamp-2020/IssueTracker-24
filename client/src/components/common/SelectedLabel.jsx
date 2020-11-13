import React from 'react';
import { getContrastYIQ } from '../../utils/color.js';
import styled from 'styled-components';

const SelectedLabelWrapper = styled.div`
  display: inline-block;
  border-radius: 360px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: bold;
  margin-right: 5px;
  height: 20px;
  line-height: 20px;
  padding: 0px 10px 3px 10px;
`;

const SelectedLabel = ({ label }) => {
  return (
    <SelectedLabelWrapper
      backgroundColor={label.color}
      color={getContrastYIQ(label.color)}
    >
      {label.title}
    </SelectedLabelWrapper>
  );
};

export default SelectedLabel;
