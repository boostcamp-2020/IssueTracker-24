import React from 'react';
import styled from 'styled-components';
import Assignee from './Assignee';
import Label from './Label';
import Milestone from './milestone';

const SidebarItemModalWrapper = styled.div`
  position:absolute;
  border-radius:5px;
  width:100%;
  background-color:#fff;
  z-index:2;
  border:1px solid #e4e6e9;
  box-shadow: 1px 1px 5px 0px #e7e7e7;
`;
const ModalTitle = styled.div`
 font-size: 12px;
 font-weight: bold;
 padding: 5px 0px 5px 8px; 
 border-bottom: 1px solid #eaecef;
`;

const SidebarItemModal = ({title, header, component}) =>{
  return(
    <SidebarItemModalWrapper>
        <ModalTitle>{header}</ModalTitle>
        {title==='Assignees'? 
        component.map((item)=>(
            <Assignee id={item.id} snsId={item.sns_id} profile={item.profile_image}></Assignee>
        )):null}
       {title==='Labels'?
        component.map((item)=>(
            <Label color={item.color} title={item.title} description={item.description}></Label>
        )):null}
        {title==='Milestone'?
         component.map((item)=>(
            <Milestone title={item.title} dueDate={item.due_date}></Milestone>
         )):null} 
    </SidebarItemModalWrapper>
  );
}

export default SidebarItemModal;