import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import SidebarItemTitle from './SidebarItemTitle';
import SidebarItemModal from './SidebarItemModal';
import { IssueContext } from '../../../pages/IssueDetailPage';
import ProfileImage from '../ProfileImage';
import ProgressBar from '../../issue/new/sidebar/ProgressBar';
import { getAllIssues } from '../../../lib/axios/issue';
import Label from '../../common/Label';
const SidebarItemWrapper = styled.div`
  position: relative;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  border-bottom: 1px solid #eaecef;
`;
const SidebarStateMsg = styled.div`
  margin-top: 10px;
`;
const SidebarUserName = styled.div``;
const SidebarContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;
const SidebarItem = ({ title, header, stateMsg, component }) => {
  const [stateMessage, setStateMsg] = useState(stateMsg);
  const { issue, setIssue } = useContext(IssueContext);
  const [show, setShow] = useState(false);
  const [issues, setIssues] = useState([]);
  const handleOnClick = () => {
    setShow(!show);
  };
  useEffect(async () => {
    const issues = await getAllIssues();
    setIssues(issues);
  }, []);

  const sidebarSeleteTitle = () => {
    if (title === 'Assignees') {
      return issue.assignees.length > 0
        ? issue.assignees.map((item) => (
            <SidebarContainer key={'assignee-item' + item.id}>
              <ProfileImage
                ofileImage
                image={item.profile_image}
                size={15}
              ></ProfileImage>
              <SidebarUserName>{item.sns_id}</SidebarUserName>
            </SidebarContainer>
          ))
        : `${stateMsg}`;
    }
    if (title === 'Milestone') {
      if (issue.milestone) {
        const filteredIssues = issues.filter(
          (issueItem) =>
            issueItem.milestone &&
            issueItem.milestone.id === issue.milestone.id,
        );
        const total = filteredIssues.length;
        const closed = filteredIssues.filter(
          (issue) => issue.state === 'closed',
        ).length;
        const progress = total === 0 ? 0 : Math.floor((closed / total) * 100);
        return (
          <ProgressBarWrapper>
            <ProgressBar width={progress} />
            <div>{issue.milestone.title}</div>
          </ProgressBarWrapper>
        );
      } else {
        return `${stateMsg}`;
      }
    }
    if (title === 'Labels') {
      if (issue.labels.length > 0) {
        return issue.labels.map((item) => (
          <Label key={'label' + item.id} label={item}></Label>
        ));
      } else {
        return `${stateMsg}`;
      }
    }
  };
  return (
    <SidebarItemWrapper>
      <SidebarItemTitle
        title={title}
        onClick={handleOnClick}
      ></SidebarItemTitle>
      {!show ? (
        <SidebarStateMsg>{sidebarSeleteTitle()}</SidebarStateMsg>
      ) : (
        <SidebarItemModal
          title={title}
          header={header}
          component={component}
          setShow={setShow}
        />
      )}
    </SidebarItemWrapper>
  );
};
export default SidebarItem;
