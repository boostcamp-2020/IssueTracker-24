import React from 'react';
import styled from 'styled-components';
import svg from '../../../utils/svg';
const COLORS = {
    TEXT: '#586069',
    SVG: '#959da5',
    HOVER: '#0366d6',
  };
const SidebarItemTitleWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  cursor:pointer;
  &:hover{
      color:${COLORS.HOVER};
  }
`;
const SidebarItemTitle = ({title, onClick}) =>{
    return(
     <SidebarItemTitleWrapper onClick={onClick}>
        {title} {svg['SidebarIcon']}
     </SidebarItemTitleWrapper>
    );
};

export default SidebarItemTitle;