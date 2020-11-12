import React,{useState} from 'react';
import styled from 'styled-components';
import ProfileImage from '../../common/ProfileImage';
import svg from '../../../utils/svg';
const AssignWrapper = styled.div`
   display:flex;
   justify-content:center;
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
  flex-grow: 1;
  text-align: center;
`;
const CancelWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const Assignee = ({snsId, profile}) =>{
   const [checked, setCheck] = useState(false);
   const checkDisplay = checked ? 'display-visible' : 'display-hidden';
   const handleOnClick = () =>{
     setCheck(!checked);
   }
  return(
     <AssignWrapper onClick={handleOnClick}>
         <CheckWrapper className={checkDisplay}>{svg.checkIcon}</CheckWrapper>
         <ProfileImage image={profile} size='15'></ProfileImage>
         {snsId}
         <CancelWrapper className={checkDisplay}>{svg.cancelButton}</CancelWrapper>
     </AssignWrapper>
  );
}
export default Assignee;