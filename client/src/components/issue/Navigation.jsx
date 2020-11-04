import React from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';

const NavigationWrapper = styled.div`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 10px;
  &:nth-child(1){
    border-right:1px solid #E1E4E8;
  }

  &:hover {
    background-color: #f6f8fa;
  }
  svg {
    margin-right: 5px;
  }
  .items-num {
    border-radius: 20px;
    background-color: #e4e7ea;
    margin-top: 4px;
    margin-left: 5px;
    padding: 0px 8px 0px 8px;
    font-size: 12px;
  }
`;

const Navigation = ({ title, num }) => {
  return (
    <NavigationWrapper>
      {svg[title]}
      <div className="nav-title">{title}</div>
      <div className="items-num">{num}</div>
    </NavigationWrapper>
  );
};

export default Navigation;
