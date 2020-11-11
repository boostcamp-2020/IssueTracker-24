import React from 'react';
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

const getContrastYIQ = (background) => {
  background = background.replace('#', '');
  const r = parseInt(background.substr(0, 2), 16);
  const g = parseInt(background.substr(2, 2), 16);
  const b = parseInt(background.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? 'black' : 'white';
};

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
