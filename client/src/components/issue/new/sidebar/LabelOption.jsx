import React from 'react';
import styled from 'styled-components';
import SmallLabel from '../../../common/SmallLabel';

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
`;

const LabelOption = ({ data }) => {
  console.log(SmallLabel);
  return (
    <LabelOptionWrapper color={data.color}>
      <div className="header">
        <SmallLabel color={data.color} />
        <div className="title">{data.title}</div>
      </div>
      <div className="description">{data.description}</div>
    </LabelOptionWrapper>
  );
};

export default LabelOption;
