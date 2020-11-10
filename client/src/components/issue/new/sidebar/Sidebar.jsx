import React, { useContext } from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';
import AssigneeOption from './UserOption';
import LabelOption from './LabelOption';
import MilestoneOption from './MilestoneOption';
import { IssueOptionContext } from '../../../../pages/issue-new/IssueNewPage';
import {
  INIT_DATA,
  ADD_ASSIGNEES,
  ADD_LABELS,
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
      type: ADD_ASSIGNEES,
      stateMsg: 'No one',
      component: AssigneeOption,
      data: state.users,
      added: state.addedAssignees,
    },
    {
      title: 'Labels',
      type: ADD_LABELS,
      stateMsg: 'None yet',
      component: LabelOption,
      data: state.labels,
      added: state.addedLabels,
    },
    {
      title: 'Milestone',
      type: SET_MILESTONE,
      stateMsg: 'No milestone',
      component: MilestoneOption,
      data: state.milestones,
      added: state.addedMilestone,
    },
  ];

  const SidebarItems = defaultItems.map((item, index) => {
    return (
      <SidebarItem
        key={'sidebar-item' + index}
        title={item.title}
        type={item.type}
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
