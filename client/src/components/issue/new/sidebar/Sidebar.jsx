import React from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const SidebarWrapper = styled.div`
  flex-basis: 23%;
  width: 16%;
`;

const Sidebar = () => {
  const defaultItems = [
    { title: 'Assignees', stateMsg: 'No one', data: 'assignees' },
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
