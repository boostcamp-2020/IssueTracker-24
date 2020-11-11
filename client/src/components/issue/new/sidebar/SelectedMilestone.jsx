import React, { useContext } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import { IssueOptionContext } from '../../../../pages/issue-new/IssueNewPage';

const SelectedMilestoneWrapper = styled.div``;
const MilestoneTitleWrapper = styled.div`
  font-size: 12px;
`;

const SelectedMilestone = ({ milestone }) => {
  const { state } = useContext(IssueOptionContext);
  const issues = state.issues.filter(
    (issue) => issue.milestone && issue.milestone.id === milestone.id,
  );
  const total = issues.length;
  const closed = issues.filter((issue) => issue.state === 'closed').length;
  const progress = total === 0 ? 0 : Math.floor((closed / total) * 100);
  return (
    <SelectedMilestoneWrapper>
      <ProgressBar width={progress} />
      <MilestoneTitleWrapper>{milestone.title}</MilestoneTitleWrapper>
    </SelectedMilestoneWrapper>
  );
};

export default SelectedMilestone;
