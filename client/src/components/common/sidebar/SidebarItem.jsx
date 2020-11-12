import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import SidebarItemTitle from './SidebarItemTitle';
import SidebarItemModal from './SidebarItemModal';
import {IssueContext} from '../../../pages/IssueDetailPage';
import ProfileImage from '../ProfileImage';
const SidebarItemWrapper = styled.div`
  position:relative;
  padding-top: 16px;
  padding-bottom: 16px;
  width:100%;
  border-bottom:1px solid #eaecef;
`;
const SidebarStateMsg = styled.div`
  margin-top:10px;
`;
const SidebarUserName = styled.div`

`;
const SidebarContainer = styled.div`
 display:flex;
 margin-top:10px;
`;
const SidebarItem = ({title, header, stateMsg, component}) =>{
   const [stateMessage, setStateMsg] = useState(stateMsg);
   const {issue, setIssue} = useContext(IssueContext);
   const [show, setShow] = useState(false);
   console.log(issue.assignees);
   const handleOnClick = () =>{
       setShow(!show);
     
   }
   useEffect(()=>{
    if(issue.user.sns_id && title==='Assignees'){
      setStateMsg(issue.user.sns_id);
    }
   },[]);
   const sidebarSeleteTitle = () =>{
      if(title==='Assignees'){
        return(
          issue.assignees.length>0?
            issue.assignees.map((item)=>(
             <SidebarContainer>
              <ProfileImage image={item.profile_image} size={15}></ProfileImage> 
              <SidebarUserName>{item.sns_id}</SidebarUserName>
            </SidebarContainer>
           )):`${stateMsg}` )}
          }
   return (
    <SidebarItemWrapper>
        <SidebarItemTitle title={title} onClick={handleOnClick}></SidebarItemTitle>
        {!show?
        
          <SidebarStateMsg>
            {sidebarSeleteTitle()}
          </SidebarStateMsg>
       
        : <SidebarItemModal title={title} header={header} component={component}/>
        }
    </SidebarItemWrapper>
   );
};

export default SidebarItem;