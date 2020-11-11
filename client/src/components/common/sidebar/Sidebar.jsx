import React, {useState} from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';
const SidebarWrapper = styled.div`
  flex-basis : 23%;
  width:100%;
`;

const Sidebar = () =>{

  const defaultItems = [
      {
          title:'Assignees',
          header:'Assign up to 10 people to this issue',
          stateMsg: 'No one',
      },
      {
          title:'Labels',
          header:'Apply labels to this issue',
          stateMsg: 'None yet',
      },
      {
          title:'Milestone',
          header:'Set milestone',
          stateMsg: 'No milestone',
      }
  ];
  const SidebarItems = defaultItems.map((item, index)=>{
    return(
       <>
        <SidebarItem
          key={'sidebar-item'+index}
          title={item.title}
          header={item.header}
          stateMsg={item.stateMsg}
        />
       </>
    );
  });
  return <SidebarWrapper>{SidebarItems}</SidebarWrapper>
}

export default Sidebar;