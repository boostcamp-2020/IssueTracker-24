import React from 'react';
import styled from 'styled-components';
import MilestoneListLeft from './MilestoneListLeft';
import MilestoneListRight from './MilestoneListRight';

const MilestoneListWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100px;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  margin: 0 auto;
  box-sizing: border-box;
`;

const MilestoneList = ({ milestone, milestoneTitle }) => {
  return (
    <MilestoneListWrapper>
      <MilestoneListLeft milestone={milestone} />
      <MilestoneListRight milestone={milestone} />
    </MilestoneListWrapper>
  );
};

export default MilestoneList;
