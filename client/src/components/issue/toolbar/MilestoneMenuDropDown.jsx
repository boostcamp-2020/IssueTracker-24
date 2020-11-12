import React, { useContext } from 'react';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';
import { FILTER_ISSUES_BY_MILESTONE } from '../../../pages/issue-list/reducer';
import DetailsMenuDropDown from './common/DetailsMenuDropDown';
import DetailsItem from './common/DetailsItem';

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
    const detailsItem = e.target.closest('.milestone-item');
    dispatch({
      type: FILTER_ISSUES_BY_MILESTONE,
      milestone: detailsItem.dataset.name,
    });
    setShowMilestoneMenu();
    e.stopPropagation();
  };

  return (
    <>
      <DetailsMenuDropDown right={'80px'}>
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
            data={milestone.title}
          >
            {milestone.title}
          </DetailsItem>
        ))}
      </DetailsMenuDropDown>
    </>
  );
};

export default MilestoneMenuDropDown;
