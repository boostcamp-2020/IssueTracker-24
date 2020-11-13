import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';
import { MilestoneContext } from '../../pages/milestone-list/MilestonePage';
import { FILTERING_MILESTONE } from '../../pages/milestone-list/reducer';

const MilestoneNavWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 50px;
  margin: 0 auto;
  margin-top: 40px;
  background-color: #e9e9e9;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #e1e4e8;
  padding: 10px 10px;
  padding-left: 10px;
  box-sizing: border-box;
`;
const OpenDiv = styled.div`
  margin-left: 5px;
  padding-left: 10px;
  cursor: pointer;
  font-weight: bold;
`;
const Closediv = styled.div`
  margin-left: 5px;
  padding-left: 10px;
  cursor: pointer;
`;

const MilestoneNav = ({ milestones }) => {
  const openMilestone = milestones.filter(
    (milestone) => milestone.state === 'open',
  ).length;
  const closedMilestone = milestones.filter(
    (milestone) => milestone.state === 'closed',
  ).length;
  const { state, dispatch } = useContext(MilestoneContext);
  const onClickHandler = async (e) => {
    const milestoneList = milestones.filter(
      (milestone) => milestone.state === e.target.title,
    );

    const openDiv = document.querySelector('.open');
    openDiv.style.fontWeight = 'normal';

    const closediv = document.querySelector('.closed');
    closediv.style.fontWeight = 'normal';

    e.target.style.fontWeight = 'bold';
    dispatch({
      type: FILTERING_MILESTONE,
      openclosedState: e.target.title,
      milestoneList: milestoneList,
    });
  };
  return (
    <MilestoneNavWrapper>
      <OpenDiv onClick={onClickHandler} className="open" title="open">
        {svg['Milestones']} {openMilestone} Open
      </OpenDiv>
      <Closediv onClick={onClickHandler} className="closed" title="closed">
        {svg['closedMilestones']} {closedMilestone} Closed
      </Closediv>
    </MilestoneNavWrapper>
  );
};

export default MilestoneNav;
