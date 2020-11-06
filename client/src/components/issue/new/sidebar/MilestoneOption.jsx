import React from 'react';
import styled from 'styled-components';

const MilestoneOptionWrapper = styled.div`
  color: #586069;
  font-size: 12px;
  padding: 5px 0px 5px 15px;
  &:hover {
    background-color: #0366d6;
    color: white;
  }
  .title {
    font-size: 14px;
  }
`;

const MilestoneOption = ({ data }) => {
  return (
    <MilestoneOptionWrapper>
      <div className="title">{data.title}</div>
      <div className="description">{data.description}</div>
    </MilestoneOptionWrapper>
  );
};

export default MilestoneOption;
