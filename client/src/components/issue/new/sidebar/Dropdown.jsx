import React from 'react';
import styled from 'styled-components';
import AssigneeOption from './UserOption';
import LabelOption from './LabelOption';
import MilestoneOption from './MilestoneOption';

const components = {
  assignees: AssigneeOption,
  labels: LabelOption,
  milestones: MilestoneOption,
};

const DropdownWrapper = styled.div`
  position: absolute;
  top: 40px;
  border: 1px solid #eaecef;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0px #e7e7e7;
  background-color: white;
  width: 100%;
  z-index: 2;

  &.display-block {
    display: block;
  }

  &.display-none {
    display: none;
    border: 1px solid green;
  }

  .dropdown-option:not(:last-child) {
    border-bottom: 1px solid #eaecef;
  }
`;

const Dropdown = ({ show, item, data, handleClose }) => {
  const dropdownDisplay = show ? 'display-block' : 'display-none';
  const Component = components[item];
  const options = data.map((option, index) => (
    <div
      className="dropdown-option"
      key={'dropdown' + index}
      onClick={handleClose}
    >
      <Component data={option} />
    </div>
  ));

  return (
    <DropdownWrapper className={dropdownDisplay}>{options}</DropdownWrapper>
  );
};

export default Dropdown;
