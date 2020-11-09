import React from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';
//
import AssigneeOption from './UserOption';
import LabelOption from './LabelOption';
import MilestoneOption from './MilestoneOption';
// component, selected 전부 다 하위로 내려주기
//
const SidebarWrapper = styled.div`
  flex-basis: 23%;
  width: 16%;
`;

const Sidebar = () => {
  const defaultItems = [
    { title: 'Assignees', stateMsg: 'No one', data: 'users' },
    { title: 'Labels', stateMsg: 'None yet', data: 'labels' },
    { title: 'Milestone', stateMsg: 'No milestone', data: 'milestones' },
  ];

  const SidebarItems = defaultItems.map((item, index) => {
    return (
      <SidebarItem
        key={'sidebar-item' + index}
        title={item.title}
        stateMsg={item.stateMsg}
        item={item.data}
      />
    );
  });

  return <SidebarWrapper>{SidebarItems}</SidebarWrapper>;
};

export default Sidebar;
