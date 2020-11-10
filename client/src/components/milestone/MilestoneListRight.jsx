import React,{useContext, useEffect} from 'react';
import styled from 'styled-components';
import {MilestoneContext} from '../../pages/milestone-list/MilestonePage';
import MilestoneModal from './MilestoneModal';
import {DELETE_MILESTONE} from '../../pages/milestone-list/reducer';
const MilestoneListRightWrapper = styled.div`
   width:50%;
   height:100%;
   background-color:#fff;
`;
const MilestoneGageContainer = styled.div`
    margin-top:20px;
    width:90%;
    height:20px;
    border-radius:10px;
    background-color:#E1E4E8;
`;
const MilestoneGageContent = styled.div`
    width:${(props)=>(props.ratio)}%;
    height:20px;
    border-radius:10px;
    background-color:#2CBE4E;
    border-right-radius:${(props)=>(props.width==='100'? "0px":"10px")}
`;
const MilestoneButtonContainer = styled.div`
    display:flex;
`;
const MilestoneButton = styled.button`
    cursor:pointer;
    color:${(props)=>(props.colors)};
    border:0px;
    background-color:#fff;
    font-size:15px;
`;

const MilestoneCompletedContainer = styled.div`
    display:flex;
`;
const MilestoneComplete = styled.div`
    margin-top:10px;
    margin-left:3px;
`;
const MilestoneOpenClose = styled.div`
    margin-top:10px;
    margin-left:20px;
`;
const MilestoneListRight =  ({milestone, milestoneTitle}) =>{
    const {state, dispatch} = useContext(MilestoneContext);
    const milestoneList = state.issues.filter(issue=>issue.milestone!==null && issue.milestone.title === milestoneTitle);
    const totalIssueNumber = milestoneList.length;
    const openIssueNumber = milestoneList.filter(issue=>issue.state==='open').length;
    const closeIssueNumber = milestoneList.filter(issue=>issue.state==='closed').length;

    const ratio = totalIssueNumber!==0? Math.floor(closeIssueNumber/totalIssueNumber*100):0;
    const deleteClickHandler = () =>{
       let display = state.display==='block'?'none':'block';
       display = state.display==='none'?'block':'none';
       dispatch({type:DELETE_MILESTONE, display:display});
    }
    return(
      <MilestoneListRightWrapper>
        <MilestoneGageContainer>
            <MilestoneGageContent ratio={ratio}/>
        </MilestoneGageContainer>
        <MilestoneCompletedContainer>
            <MilestoneComplete>{ratio}% complete</MilestoneComplete>
            <MilestoneOpenClose>{openIssueNumber} Open</MilestoneOpenClose>
            <MilestoneOpenClose>{closeIssueNumber} Closed</MilestoneOpenClose>
        </MilestoneCompletedContainer>
        <MilestoneButtonContainer>
            <MilestoneButton colors='blue'>Edit</MilestoneButton>
            <MilestoneButton colors='blue'>Close</MilestoneButton>
            <MilestoneButton colors='red' onClick={deleteClickHandler}>Delete</MilestoneButton>
        </MilestoneButtonContainer>
        <MilestoneModal display={state.display}></MilestoneModal>
      </MilestoneListRightWrapper>
    ); 
}

export default MilestoneListRight;