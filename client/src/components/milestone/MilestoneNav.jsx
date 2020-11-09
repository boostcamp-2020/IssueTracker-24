import React, {useContext}from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';
import MilestoneList from '../../components/milestone/MilestoneList';
import {MilestoneContext} from '../../pages/milestone-list/MilestonePage';

const MilestoneNavWrapper = styled.div`
display:flex;
width:80%;
height:50px;
margin:0 auto;
margin-top:40px;
background-color:#F6F8F4;
border-top-left-radius:5px;
border-top-right-radius:5px;
border:1px solid #E1E4E8;
padding:10px 10px;
padding-left:10px;
box-sizing : border-box;
`;
const OpenDiv = styled.div`
 margin-left:5px;
 padding-left:10px;
`
const CloseDiv = styled.div`
 margin-left:5px;
 padding-left:10px;
`;
const MilestoneNav = () =>{
  const {state} = useContext(MilestoneContext);
  const {milestones} = state;
  return(
    <MilestoneNavWrapper>
        <OpenDiv>
           {svg['Milestones']} 1 Open
         </OpenDiv>
         <CloseDiv>
           {svg['closeMilestones']} 0 Closed
         </CloseDiv>
       
    </MilestoneNavWrapper>
  );
}

export default MilestoneNav;