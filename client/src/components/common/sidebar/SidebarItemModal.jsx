import React from 'react';
import styled from 'styled-components';
import Assignee from './Assignee';
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
  return(
    <SidebarItemModalWrapper>
        <ModalTitle>{header}</ModalTitle>
        {title==='Assignees'? 
        component.map((item)=>(
            <Assignee snsId={item.sns_id} profile={item.profile_image}></Assignee>
        )):null}
       
    </SidebarItemModalWrapper>
  );
}

export default SidebarItemModal;