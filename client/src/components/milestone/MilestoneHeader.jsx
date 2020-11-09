import React from 'react';
import styled from 'styled-components';
import MilestoneSelectMenu from '../milestone/MilestoneSelectMenu';
import CreateMilestone from '../milestone/CreateMilestone';

const MilestoneHeaderWrapper = styled.div`
  width:80%;
  display:flex;
  justify-content:space-between;
  margin:0 auto;
  margin-top:40px;
  height:30px;
`;

const MilestoneHeader = () =>{
    return(
        <>
         <MilestoneHeaderWrapper>
         <MilestoneSelectMenu/>
         <CreateMilestone>
             New Milestones
         </CreateMilestone>
          </MilestoneHeaderWrapper>
        </>
    )

}

export default MilestoneHeader;