import React, {useContext, useEffect}from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';
import {MilestoneContext} from '../../pages/milestone-list/MilestonePage';
import {FILTERING_MILESTONE} from '../../pages/milestone-list/reducer';

const MilestoneNavWrapper = styled.div`
display:flex;
width:80%;
height:50px;
margin:0 auto;
margin-top:40px;
background-color:#E6E6E6;
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
 cursor:pointer;
 font-weight:bold;
`
const CloseDiv = styled.div`
 margin-left:5px;
 padding-left:10px;
 cursor:pointer;
`;

const MilestoneNav = ({milestones}) =>{
  const openMilestone = milestones.filter(milestone=> milestone.state==="open").length;
  const closeMilestone = milestones.filter(milestone=>milestone.state==="close").length;
  const {state, dispatch} = useContext(MilestoneContext);
  const onClickHandler = async (e) =>{
    const milestoneList = milestones.filter(milestone=>milestone.state===e.target.title);

    const openDiv = document.querySelector('.open');
    openDiv.style.fontWeight='normal';

    const closeDiv = document.querySelector('.close');
    closeDiv.style.fontWeight='normal';

    e.target.style.fontWeight='bold';
    dispatch({
       type:FILTERING_MILESTONE, 
       openclosedState:e.target.title,
       milestoneList: milestoneList,
    })
  }
  return(
    <MilestoneNavWrapper>
        <OpenDiv onClick={onClickHandler} className='open' title='open'>
           {svg['Milestones']} {openMilestone} Open
         </OpenDiv>
         <CloseDiv onClick={onClickHandler} className='close' title='close'>
           {svg['closeMilestones']} {closeMilestone} Closed
         </CloseDiv>
    </MilestoneNavWrapper>
  );
}

export default MilestoneNav;