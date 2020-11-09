import React, {useContext, useEffect, useReducer} from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import svg from '../../utils/svg';
import LabelComponent from '../../components/common/LabelComponent';

const MilestoneHeader = styled.div`
  width:80%;
  display:flex;
  justify-content:space-between;
  margin:0 auto;
  margin-top:40px;
  height:30px;
`;

const MilestoneSelectMenu = styled.div`
   display:flex;
   margin-top:
`;

const CreateMilestone = styled.button`
  background-color:#30C453;
  border:0;
  color:#fff;
  width:130px;
  height:30px;
  cursor:pointer;
  border-radius:5px;
`;

const MilestonePage = () =>{
    return (
      <>
       <Header/>
       <MilestoneHeader>
         <MilestoneSelectMenu>
           <LabelComponent svg={svg['Labels']} title='Labels'/>
           <LabelComponent svg={svg['Milestones']} title='Milestones'/>
         </MilestoneSelectMenu>
         <CreateMilestone>
             New Milestones
         </CreateMilestone>
       </MilestoneHeader>
 
      </>
    );
}

export default MilestonePage;