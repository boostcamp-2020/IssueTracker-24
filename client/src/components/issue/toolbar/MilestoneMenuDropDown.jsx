import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';
import { FILTER_ISSUES_BY_MILESTONE } from '../../../pages/issue-list/reducer';

const DetailsItem = styled.div`
  border-bottom: 1px solid #eaecef;
  height: 32px;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 20px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
  &:nth-child(1) {
    font-weight: 600;
    background-color: #fafbfc;
    cursor: auto;
    &:hover {
      background-color: #fafbfc;
    }
  }
`;

const DetailsMenuDropDown = styled.div`
  width: 250px;
  position: absolute;
  top: 70px;
  right: 80px;
  z-index: 10;
  border: 1px solid #eaecef;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
`;

const MilestoneMenuDropDown = ({ setShowMilestoneMenu }) => {
  const { state, dispatch } = useContext(IssuesContext);
  const { milestones } = state;

  const onClickFirstItem = (e) => {
    e.stopPropagation();
  };

  const onClickNoMilestone = (e) => {
    dispatch({
      type: FILTER_ISSUES_BY_MILESTONE,
    });
    setShowMilestoneMenu();
    e.stopPropagation();
  };

  const onClickDetailsItem = (e) => {
    const detailsItem = e.target.closedst('.milestone-item');
    dispatch({
      type: FILTER_ISSUES_BY_MILESTONE,
      milestone: detailsItem.dataset.name,
    });
    setShowMilestoneMenu();
    e.stopPropagation();
  };

  return (
    <>
      <DetailsMenuDropDown>
        <DetailsItem onClick={onClickFirstItem}>
          Filter by milestone
        </DetailsItem>
        <DetailsItem onClick={onClickNoMilestone}>
          Issues with no milestone
        </DetailsItem>
        {milestones.map((milestone, index) => (
          <DetailsItem
            key={index}
            onClick={onClickDetailsItem}
            className={'milestone-item'}
            data-name={milestone.title}
          >
            {milestone.title}
          </DetailsItem>
        ))}
      </DetailsMenuDropDown>
    </>
  );
};

export default MilestoneMenuDropDown;
