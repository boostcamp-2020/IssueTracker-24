import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { getDueInfo } from '../../../utils/time';
import svg from '../../../utils/svg';
import { IssueContext } from '../../../pages/IssueDetailPage';
import { patchIssue } from '../../../lib/axios/issue';

const MilestoneWrapper = styled.div`
  cursor: pointer;
  border-bottom: 1px solid #eaecef;
  &:hover {
    background-color: #0366d6;
    color: #fff;
  }
  .display-visible {
    visibility: visible;
  }
  .display-hidden {
    visibility: hidden;
  }
`;
const MilestoneContent = styled.div`
  flex-basis: 80%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
`;
const CheckWrapper = styled.div`
  flex-basis: 9%;
`;
const CancelWrapper = styled.div`
  flex-basis: 9%;
`;
const MilestoneTitle = styled.div`
  color: black;
  font-size: 15px;
`;
const MilestoneDueDate = styled.div``;
const MilestoneHeader = styled.div`
  flex-basis: 80%;
`;

const Milestone = ({ milestone, setShow }) => {
  const [checked, setCheck] = useState(false);
  const { issue, setIssue } = useContext(IssueContext);
  const checkDisplay = checked ? 'display-visible' : 'display-hidden';

  useEffect(() => {
    if (issue.milestone && issue.milestone.id === Number(milestone.id))
      setCheck(true);
  }, []);

  const handleOnClick = async () => {
    let patchedIssue;
    if (checked)
      patchedIssue = await patchIssue(issue.id, { milestone_id: null });
    else
      patchedIssue = await patchIssue(issue.id, { milestone_id: milestone.id });

    setIssue(patchedIssue);
    setShow(false);
  };
  return (
    <MilestoneWrapper onClick={handleOnClick}>
      <MilestoneContent>
        <CheckWrapper className={checkDisplay}>{svg.checkIcon}</CheckWrapper>
        <MilestoneHeader>
          <MilestoneTitle>{milestone.title}</MilestoneTitle>
          <MilestoneDueDate>{getDueInfo(milestone.due_date)}</MilestoneDueDate>
        </MilestoneHeader>
        <CancelWrapper className={checkDisplay}>
          {svg.cancelButton}
        </CancelWrapper>
      </MilestoneContent>
    </MilestoneWrapper>
  );
};
export default Milestone;
