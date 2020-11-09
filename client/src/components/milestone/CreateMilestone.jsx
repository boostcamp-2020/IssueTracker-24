import React from 'react';
import styled from 'styled-components';

const CreateMilestoneWrapper = styled.button`
background-color:#30C453;
border:0;
color:#fff;
width:130px;
height:30px;
cursor:pointer;
border-radius:5px;
`;

const CreateMilestone = () =>{
   return(
    <CreateMilestoneWrapper>
        New milestones
    </CreateMilestoneWrapper>
   );
}
export default CreateMilestone;