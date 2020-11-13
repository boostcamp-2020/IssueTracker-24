import React, { useContext, useEffect } from 'react';
import { MilestoneContext } from '../../pages/milestone-list/MilestonePage';
import styled from 'styled-components';
import { DELETE_MILESTONE } from '../../pages/milestone-list/reducer';
import { deleteMilestone } from '../../lib/axios/milestone';
import { INIT_DATA } from '../../pages/milestone-list/reducer';
import { Redirect } from 'react-router-dom';
const MilestoneModalWrapper = styled.div`
  display: ${(props) => props.display};
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(10, 10, 10, 0.1);
`;
const MilestoneModalContent = styled.div`
  background-color: #f6f8fa;
  display: block;
  justify-content: space-between;
  margin: 15% auto; /* 15% from the top and centered */

  border: 1px solid #888;
  width: 30%; /* Could be more or less, depending on screen size */
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  opacity: 1;
  animation-name: fadein;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const MilestoneModalTitle = styled.div`
  font-weight: bold;
  padding: 20px;
`;
const MilestoneModalClosed = styled.button`
  float: right;
  border: 0;
  background: #f6f8fa;
  outline: 0;
  &:hover {
    cursor: pointer;
    color: #0366d6;
  }
`;
const MilestoneModalNav = styled.div`
  background-color: #fffbdd;
  width: 100%;
  height: 70px;
  padding-left: 20px;
  padding-top: 30px;
  box-sizing: border-box;
  border: 2px soild #efe4b1;
`;
const MilestoneModalSection = styled.div`
  background-color: #fff;
  width: 100%;
  height: 200px;
`;
const MilestonModalParagraph = styled.p`
  box-sizing: border-box;
  padding-left: 20px;
  padding-top: 10px;
`;
const MilestoneModalFooter = styled.div`
  border-top: 1px solid #888;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const MilestoneDeleteButton = styled.button`
  width: 94%;
  height: 30px;
  background-color: #fafbfc;
  color: #d73a49;
  margin: 6px auto;
  border: 1px solid #e1e4e8;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #dc3535;
    color: #fff;
    transition: 0.2s;
  }
`;
const MilestoneModal = ({ display, milestoneId }) => {
  const { state, dispatch } = useContext(MilestoneContext);
  const { milestones } = state;
  const closedHandler = () => {
    let display = state.display === 'block' ? 'none' : 'block';
    display = state.display === 'none' ? 'block' : 'none';
    dispatch({
      type: DELETE_MILESTONE,
      display: display,
      milestoneId: milestoneId,
    });
  };
  const deleteHandler = async () => {
    await deleteMilestone(milestoneId);
    dispatch({
      type: INIT_DATA,
      milestones: milestones,
      milestoneList: milestones.filter(
        (milestone) => milestone.state === 'open',
      ),
      issues: [],
      display: 'none',
    });
    location.reload();
  };
  return (
    <MilestoneModalWrapper display={display}>
      <MilestoneModalContent>
        <MilestoneModalTitle>
          Are you sure?
          <MilestoneModalClosed onClick={closedHandler}>
            &times;
          </MilestoneModalClosed>
        </MilestoneModalTitle>
        <MilestoneModalNav>Deletions are final!</MilestoneModalNav>
        <MilestoneModalSection>
          <MilestonModalParagraph>
            Once you delete this milestone you will not be able to see it again.
            If you would like to closed the milestone, remove any issues from
            the milestone and it will automatically closed.
          </MilestonModalParagraph>
          <MilestonModalParagraph>
            Deleting this milestone will not delete or closed the associated
            issues.
          </MilestonModalParagraph>
          <MilestoneModalFooter>
            <MilestoneDeleteButton onClick={deleteHandler}>
              Delete this milestone
            </MilestoneDeleteButton>
          </MilestoneModalFooter>
        </MilestoneModalSection>
      </MilestoneModalContent>
    </MilestoneModalWrapper>
  );
};
export default MilestoneModal;
