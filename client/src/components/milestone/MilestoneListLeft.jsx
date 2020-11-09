import React, {useContext} from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';

const MilestoneListLeftWrapper = styled.div`
   width:50%;
   height:100%;
   background-color:#fff;
   border:0px;
   padding:20px 24px;
   box-sizing:border-box;
  
`;

const MilestoneTitle = styled.div`
font-size:20px;
`;

const MilestoneDate = styled.div`
 margin-top:3px;
`;
const MilestoneContent = styled.div`
 margin-top:3px;
`;
const MilestoneListLeft =  ({milestone}) =>{
   
    return (
      <MilestoneListLeftWrapper>
        <MilestoneTitle>{milestone.title}</MilestoneTitle>
        <MilestoneDate>{svg['dueMilestones']}
        {milestone.due_date}
        </MilestoneDate>
        <MilestoneContent>
            {milestone.description}
        </MilestoneContent>
      </MilestoneListLeftWrapper>
    );
}

export default MilestoneListLeft;