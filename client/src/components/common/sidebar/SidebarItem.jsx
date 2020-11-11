import React, {useState} from 'react';
import styled from 'styled-components';
import SidebarItemTitle from './SidebarItemTitle';
import SidebarItemModal from './SidebarItemModal';
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
const SidebarItem = ({title, header, stateMsg, component}) =>{
   const [stateMessage, setStateMsg] = useState(stateMsg);
   const [show, setShow] = useState(false);

   const handleOnClick = () =>{
       setShow(!show);
   }
   return (
    <SidebarItemWrapper>
        <SidebarItemTitle title={title} onClick={handleOnClick}></SidebarItemTitle>
        {!show? 
         <SidebarStateMsg>{stateMessage}</SidebarStateMsg>
        : <SidebarItemModal title={title} header={header} component={component}/>
        }
    </SidebarItemWrapper>
   );
};

export default SidebarItem;