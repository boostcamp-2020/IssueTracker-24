import React from 'react';
import styled from 'styled-components';
import { getDueInfo } from '../../../../utils/time.js';
import svg from '../../../../utils/svg.js';

const MilestoneOptionWrapper = styled.div`
  color: #586069;
  font-size: 12px;
  padding: 5px 0;
  display: flex;
  &:hover {
    background-color: #0366d6;
    color: white;
    cursor: pointer;
  }
  .display-visible {
    visibility: visible;
  }
  .display-hidden {
    visibility: hidden;
  }
`;
const MilestoneContent = styled.div`
  flex-grow: 8;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const MilestoneTitle = styled.div`
  font-size: 15px;
`;
const MilestoneDate = styled.div`
  font-size: 12px;
`;
const CheckWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
`;
const CancelWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
`;
const months = [
  'null',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const MilestoneOption = ({ option, setShow, set, get }) => {
  const checkDisplay =
    (get && get.id) === option.id ? 'display-visible' : 'display-hidden';
  const getYearMonthDate = (str) =>
    str ? str.split('T')[0].split('-') : [null, null, null];
  const [year, month, date] = getYearMonthDate(option.due_date);
  const handleOnClick = () => {
    if (get) {
      if (get.id === option.id) {
        set([]);
      } else {
        set([option]);
      }
    } else {
      set([option]);
    }
    setShow(false);
  };

  return (
    <MilestoneOptionWrapper onClick={handleOnClick}>
      <CheckWrapper className={checkDisplay}>{svg.checkIcon}</CheckWrapper>
      <MilestoneContent>
        <MilestoneTitle>{option.title}</MilestoneTitle>
        <MilestoneDate>{getDueInfo(option.due_date)}</MilestoneDate>
      </MilestoneContent>
      <CancelWrapper className={checkDisplay}>{svg.cancelButton}</CancelWrapper>
    </MilestoneOptionWrapper>
  );
};

export default MilestoneOption;
