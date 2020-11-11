import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../common/ProfileImage';
const AssignWrapper = styled.div`
   display:flex;
   justify-content:center;
   width:100%;
   height:30px;
   border-bottom : 1px solid #eaecef;
`;
const Profile = styled.img.attrs({
    src: props => props.profile
})`
border-radius:5px;
`;
const Assignee = ({snsId, profile}) =>{
  console.log(profile);
  return(
     <AssignWrapper>
         <ProfileImage image={profile} size='15'></ProfileImage>
         {snsId}
    
     </AssignWrapper>
  );
}
export default Assignee;