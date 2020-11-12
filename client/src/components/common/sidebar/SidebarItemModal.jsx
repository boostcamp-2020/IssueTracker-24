import React from 'react';
import styled from 'styled-components';
import Assignee from './Assignee';
import Label from './Label';
import Milestone from './milestone';

const SidebarItemModalWrapper = styled.div`
<<<<<<< HEAD
  position: absolute;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  border: 1px solid #e4e6e9;
  box-shadow: 1px 1px 5px 0px #e7e7e7;
`;
const ModalTitle = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid #eaecef;
  color: black;
  padding-bottom: 10px;
  padding-left: 10px;
  font-weight: 550;
`;

const SidebarItemModal = ({ title, header, component, setShow }) => {
  return (
    <SidebarItemModalWrapper>
      <ModalTitle>{header}</ModalTitle>
      {title === 'Assignees'
        ? component.map((item) => (
            <Assignee
              id={item.id}
              snsId={item.sns_id}
              profile={item.profile_image}
              key={'assignee' + item.id}
            ></Assignee>
          ))
        : null}
      {title === 'Labels'
        ? component.map((item) => (
            <Label
              key={'label' + item.id}
              color={item.color}
              title={item.title}
              description={item.description}
              id={item.id}
            ></Label>
          ))
        : null}
      {title === 'Milestone'
        ? component.map((item) => (
            <Milestone
              key={'milestone' + item.id}
              milestone={item}
              setShow={setShow}
            ></Milestone>
          ))
        : null}
    </SidebarItemModalWrapper>
  );
};

export default SidebarItemModal;
