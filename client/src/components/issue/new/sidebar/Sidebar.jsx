import React, { useContext } from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';
import AssigneeOption from './UserOption';
import LabelOption from './LabelOption';
import MilestoneOption from './MilestoneOption';
import { IssueOptionContext } from '../../../../pages/issue-new/IssueNewPage';
import {
  SET_ASSIGNEES,
  SET_LABELS,
  SET_MILESTONE,
} from '../../../../pages/issue-new/reducer';

const SidebarWrapper = styled.div`
  flex-basis: 23%;
  width: 16%;
`;

const Sidebar = () => {
  const { state } = useContext(IssueOptionContext);
  const defaultItems = [
    {
      title: 'Assignees',
      type: SET_ASSIGNEES,
      header: 'Assign up to 10 people to this issue',
      stateMsg: 'No one',
      component: AssigneeOption,
      data: state.users,
      added: state.addedAssignees,
    },
    {
      title: 'Labels',
      type: SET_LABELS,
      header: 'Apply labels to this issue',
      stateMsg: 'None yet',
      component: LabelOption,
      data: state.labels,
      added: state.addedLabels,
    },
    {
      title: 'Milestone',
      type: SET_MILESTONE,
      header: 'Set milestone',
      stateMsg: 'No milestone',
      component: MilestoneOption,
      data: state.milestones.filter((milestone) => milestone.state === 'open'),
      added: state.addedMilestone,
    },
  ];

  const SidebarItems = defaultItems.map((item, index) => {
    return (
      <SidebarItem
        key={'sidebar-item' + index}
        title={item.title}
        type={item.type}
        header={item.header}
        stateMsg={item.stateMsg}
        component={item.component}
        data={item.data}
        added={item.added}
      />
    );
  });

  return <SidebarWrapper>{SidebarItems}</SidebarWrapper>;
};

export default Sidebar;
