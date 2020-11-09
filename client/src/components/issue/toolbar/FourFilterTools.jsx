import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DropDownIcon from '../../common/DropDownIcon';
import AuthorMenuDropDown from './AuthorMenuDropDown';
import LabelMenuDropDown from './LabelMenuDropDown';
import MilestoneMenuDropDown from './MilestoneMenuDropDown';
import AssigneeMenuDropDown from './AssigneeMenuDropDown';

const DetailsButton = styled.button`
  font-size: 15px;
  height: 35px;
  margin-right: 0;
  margin-left: 20px;
  box-sizing: border-box;
  background-color: #e9e9e9;
  border: 0;
  outline: 0;
  color: #586069;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const FourFilterTools = () => {
  const [showAuthorMenu, setShowAuthorMenu] = useState(false);
  const [showLabelMenu, setShowLabelMenu] = useState(false);
  const [showMilestoneMenu, setShowMilestoneMenu] = useState(false);
  const [showAssigneeMenu, setShowAssigneeMenu] = useState(false);

  const onClickAuthorButton = () => setShowAuthorMenu(!showAuthorMenu);
  const onClickLabelButton = () => setShowLabelMenu(!showLabelMenu);
  const onClickMilestoneButton = () => setShowMilestoneMenu(!showMilestoneMenu);
  const onClickAssigneeButton = () => setShowAssigneeMenu(!showAssigneeMenu);

  const authorMenuRef = useRef();
  const labelMenuRef = useRef();
  const milestoneMenuRef = useRef();
  const assigneeMenuRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (authorMenuRef.current && authorMenuRef.current.contains(e.target))
        return;
      setShowAuthorMenu(false);
    });
    document.body.addEventListener('click', (e) => {
      if (labelMenuRef.current && labelMenuRef.current.contains(e.target))
        return;
      setShowLabelMenu(false);
    });
    document.body.addEventListener('click', (e) => {
      if (
        milestoneMenuRef.current &&
        milestoneMenuRef.current.contains(e.target)
      )
        return;
      setShowMilestoneMenu(false);
    });
    document.body.addEventListener('click', (e) => {
      if (assigneeMenuRef.current && assigneeMenuRef.current.contains(e.target))
        return;
      setShowAssigneeMenu(false);
    });
  }, []);

  return (
    <>
      <DetailsButton onClick={onClickAuthorButton} ref={authorMenuRef}>
        Author
        <DropDownIcon />
      </DetailsButton>
      {showAuthorMenu && (
        <AuthorMenuDropDown setShowAuthorMenu={setShowAuthorMenu} />
      )}

      <DetailsButton onClick={onClickLabelButton} ref={labelMenuRef}>
        Label
        <DropDownIcon />
      </DetailsButton>
      {showLabelMenu && (
        <LabelMenuDropDown setShowLabelMenu={setShowLabelMenu} />
      )}

      <DetailsButton onClick={onClickMilestoneButton} ref={milestoneMenuRef}>
        Milestones
        <DropDownIcon />
      </DetailsButton>
      {showMilestoneMenu && (
        <MilestoneMenuDropDown setShowMilestoneMenu={setShowMilestoneMenu} />
      )}

      <DetailsButton onClick={onClickAssigneeButton} ref={assigneeMenuRef}>
        Assignee
        <DropDownIcon />
      </DetailsButton>
      {showAssigneeMenu && (
        <AssigneeMenuDropDown setShowAssigneeMenu={setShowAssigneeMenu} />
      )}
    </>
  );
};

export default FourFilterTools;
