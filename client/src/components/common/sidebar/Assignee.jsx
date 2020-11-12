import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../common/ProfileImage';
import svg from '../../../utils/svg';
import { IssueContext } from '../../../pages/IssueDetailPage';
import { addAssignee, removeAssignee } from '../../../lib/axios/issue';

const AssignWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #eaecef;
  cursor: pointer;
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
const CheckWrapper = styled.div``;
const AssigneeContent = styled.div`
  display: flex;
  flex-basis: 60%;
`;
const AssigneeHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-left: 5px;
  &:hover {
    background-color: 0366d6;
  }
`;
const ProfileId = styled.div`
  font-size: 18px;
  margin-left: 5px;
`;

const Assignee = ({ id, snsId, profile }) => {
  const [checked, setCheck] = useState(false);
  const { issue, setIssue } = useContext(IssueContext);
  const checkDisplay = checked ? 'display-visible' : 'display-hidden';
  const handleOnClick = async () => {
    if (!checked) {
      setIssue(await addAssignee(issue.id, id));
    } else {
      setIssue(await removeAssignee(issue.id, id));
    }
    setCheck(!checked);
  };
  useEffect(() => {
    if (issue.assignees.some((assignee) => assignee.id === id)) {
      setCheck(true);
    }
  }, []);
  return (
    <AssignWrapper onClick={handleOnClick}>
      <AssigneeContent>
        <CheckWrapper className={checkDisplay}>{svg.checkIcon}</CheckWrapper>
        <AssigneeHeader>
          <ProfileImage image={profile} size="15"></ProfileImage>
          <ProfileId>{snsId}</ProfileId>
        </AssigneeHeader>
      </AssigneeContent>
    </AssignWrapper>
  );
};
export default Assignee;
