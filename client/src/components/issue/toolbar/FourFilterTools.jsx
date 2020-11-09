import React, { useState, useContext } from 'react';
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
  const [isShowAuthorMenu, setShowAuthorMenu] = useState(false);
  const [isShowLabelMenu, setShowLabelMenu] = useState(false);
  const [isShowMilestoneMenu, setShowMilestoneMenu] = useState(false);
  const [isShowAssigneeMenu, setShowAssigneeMenu] = useState(false);

  const onClickAuthorButton = () => setShowAuthorMenu(!isShowAuthorMenu);
  const onClickLabelButton = () => setShowLabelMenu(!isShowLabelMenu);
  const onClickMilestoneButton = () =>
    setShowMilestoneMenu(!isShowMilestoneMenu);
  const onClickAssigneeButton = () => setShowAssigneeMenu(!isShowAssigneeMenu);

  return (
    <>
      <DetailsButton onClick={onClickAuthorButton}>
        Author
        <DropDownIcon />
      </DetailsButton>
      {isShowAuthorMenu && <AuthorMenuDropDown />}

      <DetailsButton onClick={onClickLabelButton}>
        Label
        <DropDownIcon />
      </DetailsButton>
      {isShowLabelMenu && <LabelMenuDropDown />}

      <DetailsButton onClick={onClickMilestoneButton}>
        Milestones
        <DropDownIcon />
      </DetailsButton>
      {isShowMilestoneMenu && <MilestoneMenuDropDown />}

      <DetailsButton onClick={onClickAssigneeButton}>
        Assignee
        <DropDownIcon />
      </DetailsButton>
      {isShowAssigneeMenu && <AssigneeMenuDropDown />}
    </>
  );
};

export default FourFilterTools;
