import React, { useContext } from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';
import { IssueContext } from '../../../pages/IssueDetailPage';
const SidebarWrapper = styled.div`
  flex-basis: 23%;
  width: 100%;
`;

const Sidebar = () => {
  const {
    assignee,
    setAssignee,
    label,
    setLabel,
    milestone,
    setMilestone,
  } = useContext(IssueContext);
  const defaultItems = [
    {
      title: 'Assignees',
      header: 'Assign up to 10 people to this issue',
      stateMsg: 'No one',
      component: assignee,
    },
    {
      title: 'Labels',
      header: 'Apply labels to this issue',
      stateMsg: 'None yet',
      component: label,
    },
    {
      title: 'Milestone',
      header: 'Set milestone',
      stateMsg: 'No milestone',
      component: milestone,
    },
  ];
  const SidebarItems = defaultItems.map((item, index) => {
    return (
      <div key={'sidebaritem' + index}>
        <SidebarItem
          title={item.title}
          header={item.header}
          stateMsg={item.stateMsg}
          component={item.component}
        />
      </div>
    );
  });
  return <SidebarWrapper>{SidebarItems}</SidebarWrapper>;
};

export default Sidebar;
