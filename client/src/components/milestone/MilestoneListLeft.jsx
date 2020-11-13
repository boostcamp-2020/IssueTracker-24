import React, { useContext } from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';
import { getDueInfo } from '../../utils/time';
const MilestoneListLeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  border: 0px;
  padding: 20px 24px;
  box-sizing: border-box;
`;

const MilestoneTitle = styled.div`
  font-size: 20px;
`;

const MilestoneDate = styled.div`
  margin-top: 3px;
  color: grey;
`;
const MilestoneContent = styled.div`
  margin-top: 3px;
  color: grey;
`;
const MilestoneListLeft = ({ milestone }) => {
  const milestoneTime = getDueInfo(milestone.due_date);
  return (
    <MilestoneListLeftWrapper>
      <MilestoneTitle>{milestone.title}</MilestoneTitle>
      <MilestoneDate>
        {svg['dueMilestones']}
        {milestoneTime}
      </MilestoneDate>
      <MilestoneContent>{milestone.description}</MilestoneContent>
    </MilestoneListLeftWrapper>
  );
};

export default MilestoneListLeft;
