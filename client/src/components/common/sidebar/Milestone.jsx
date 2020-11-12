import React from 'react';
import styled from 'styled-components';
import {getDueInfo} from '../../../utils/time';
const MilestoneWrapper = styled.div`
 cursor:pointer;
 border-bottom: 1px solid #eaecef;
 .dueDate{
     margin-left:10px;
 }
 &:hover{
  background-color:#0366D6;
  color:#fff;
}
`;
const MilestoneContent = styled.div`
  display:flex;
  justify-content:center;
`;
const Milestone = ({title, dueDate}) =>{
  return(
    <MilestoneWrapper>
       <MilestoneContent>
           <div>{title}</div>
           <div className='dueDate'>{getDueInfo(dueDate)}</div>
       </MilestoneContent>
    </MilestoneWrapper>
  );
}
export default Milestone;