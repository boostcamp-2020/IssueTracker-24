import React from 'react';
import styled from 'styled-components';

const LabelOptionWrapper = styled.div`
  color: #586069;
  font-size: 12px;
  padding: 5px 0px 5px 15px;
  &:hover {
    background-color: #0366d6;
    color: white;
  }
  .header {
    display: flex;
  }
  .square {
    width: 10px;
    height: 10px;
    margin-top: 4px;
    margin-right: 6px;
    background-color: ${(props) => props.color};
    border-radius: 3px;
  }
`;

const LabelOption = ({ data }) => {
  return (
    <LabelOptionWrapper color={data.color}>
      <div className="header">
        <div className="square"></div>
        <div className="title">{data.title}</div>
      </div>
      <div className="description">{data.description}</div>
    </LabelOptionWrapper>
  );
};

export default LabelOption;
