import React,{useState} from 'react';
import styled from 'styled-components';
import {getDueInfo} from '../../../utils/time';
import svg from '../../../utils/svg';
const MilestoneWrapper = styled.div`
 cursor:pointer;
 border-bottom: 1px solid #eaecef;
 &:hover{
  background-color:#0366D6;
  color:#fff;
}
.display-visible {
  visibility: visible;
}
.display-hidden {
  visibility: hidden;
}
`;
const MilestoneContent = styled.div`
 flex-basis: 80%;
 display: flex;
 justify-content:space-between;
 width: 100%;
`;
const CheckWrapper = styled.div`
`;
const CancelWrapper = styled.div`
`;
const MilestoneTitle = styled.div`
`;
const MilestoneDueDate = styled.div`
`;
const MilestoneHeader = styled.div`

`;
const Milestone = ({title, dueDate}) =>{
  const [checked, setCheck] = useState(false);
  const checkDisplay = checked ? 'display-visible':'display-hidden';
  const handleOnClick = () =>{
    setCheck(!checked); 
  }
  return(
    <MilestoneWrapper onClick={handleOnClick}>
       <MilestoneContent>
        <CheckWrapper className={checkDisplay}>{svg.checkIcon}</CheckWrapper>
          <MilestoneHeader>
            <MilestoneTitle>{title}</MilestoneTitle>
            <MilestoneDueDate>{getDueInfo(dueDate)}</MilestoneDueDate>
          </MilestoneHeader>   
        <CancelWrapper className={checkDisplay}>{svg.cancelButton}</CancelWrapper>
      </MilestoneContent>
       
    </MilestoneWrapper>
  );
}
export default Milestone;