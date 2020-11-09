import React from 'react';
import styled from 'styled-components';
import MilestoneSelectMenu from '../milestone/MilestoneSelectMenu';
import GreenButton from '../common/GreenButton';
import { useHistory } from 'react-router-dom';
const MilestoneHeaderWrapper = styled.div`
  width:80%;
  display:flex;
  justify-content:space-between;
  margin:0 auto;
  margin-top:40px;
  height:30px;
`;

const MilestoneHeader = () =>{
    let history = useHistory();
    const MilestoneCreate = () =>{
        history.push('/milestones/new');
    }
    return(
        <>
         <MilestoneHeaderWrapper>
         <MilestoneSelectMenu/>
         <GreenButton text='New Milestones' func={MilestoneCreate}>
         </GreenButton>
          </MilestoneHeaderWrapper>
        </>
    )

}

export default MilestoneHeader;