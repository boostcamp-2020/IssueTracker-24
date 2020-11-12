import React,{useState} from 'react';
import styled from 'styled-components';
import ProfileImage from '../../common/ProfileImage';
import svg from '../../../utils/svg';
const AssignWrapper = styled.div`
   display:flex;
   justify-content:space-between;
   width:100%;
   height:30px;
   border-bottom : 1px solid #eaecef;
   cursor:pointer;
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
const CheckWrapper = styled.div`

`;
const CancelWrapper = styled.div`
  
`;
const AssigneeContent = styled.div`
  display: flex;
  justify-content:space-between;
  width: 100%;
`;
const AssigneeHeader = styled.div`
  display:flex;
  justify-content:center;
`;
const ProfileId = styled.div`
`;
const Assignee = ({snsId, profile}) =>{
   const [checked, setCheck] = useState(false);
   const checkDisplay = checked ? 'display-visible' : 'display-hidden';
   const handleOnClick = () =>{
     setCheck(!checked);
   }
  return(
     <AssignWrapper onClick={handleOnClick}>
        <AssigneeContent>
           <CheckWrapper className={checkDisplay}>{svg.checkIcon}</CheckWrapper>
           <AssigneeHeader>
             <ProfileImage image={profile} size='15'></ProfileImage>
             <ProfileId>{snsId}</ProfileId>
           </AssigneeHeader>
           <CancelWrapper className={checkDisplay}>{svg.cancelButton}</CancelWrapper>
        </AssigneeContent>  
     </AssignWrapper>
  );
}
export default Assignee;