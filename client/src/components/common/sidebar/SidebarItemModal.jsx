import React from 'react';
import styled from 'styled-components';
import Assignee from './Assignee';
import Label from './Label';
import Milestone from './milestone';
import {getDueInfo} from '../../../utils/time';
const SidebarItemModalWrapper = styled.div`
  position:absolute;
  width:100%;
  height:300px;
  background-color:#fff;
  z-index:2;
  border:1px solid #e4e6e9;
`;
const ModalTitle = styled.div`
  margin-top:10px;
  border-bottom : 1px solid #eaecef;
`;

const SidebarItemModal = ({title, header, component}) =>{
  console.log(component);
  return(
    <SidebarItemModalWrapper>
        <ModalTitle>{header}</ModalTitle>
        {title==='Assignees'? 
        component.map((item)=>(
            <Assignee snsId={item.sns_id} profile={item.profile_image}></Assignee>
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