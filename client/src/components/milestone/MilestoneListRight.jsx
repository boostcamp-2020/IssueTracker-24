import React from 'react';
import styled from 'styled-components';


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
    width:66.6%;
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
const MilestoneListRight = () =>{
    return(
      <MilestoneListRightWrapper>
        <MilestoneGageContainer>
            <MilestoneGageContent/>
        </MilestoneGageContainer>
        <MilestoneCompletedContainer>
            <MilestoneComplete>70% complete</MilestoneComplete>
            <MilestoneOpenClose>2 Open</MilestoneOpenClose>
            <MilestoneOpenClose>1 Closed</MilestoneOpenClose>
        </MilestoneCompletedContainer>
        <MilestoneButtonContainer>
            <MilestoneButton colors='blue'>Edit</MilestoneButton>
            <MilestoneButton colors='blue'>Close</MilestoneButton>
            <MilestoneButton colors='red'>Delete</MilestoneButton>
        </MilestoneButtonContainer>
      </MilestoneListRightWrapper>
    ); 
}

export default MilestoneListRight;