import React from 'react';
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
const MilestoneListLeft =  () =>{
    return (
      <MilestoneListLeftWrapper>
        <MilestoneTitle>스프린트2</MilestoneTitle>
        <MilestoneDate>{svg['dueMilestones']}
        Due by November 15, 2020
        </MilestoneDate>
        <MilestoneContent>
            다음 배포를 위한 스프린트
        </MilestoneContent>
      </MilestoneListLeftWrapper>
    );
}

export default MilestoneListLeft;