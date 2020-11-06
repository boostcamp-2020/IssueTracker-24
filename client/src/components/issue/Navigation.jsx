import React from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';

const NavigationWrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  cursor: pointer;
  padding: 5px 10px 5px 10px;
  &:nth-child(1) {
    border-right: 1px solid #e1e4e8;
    width: 40%;
  }
  &:nth-child(2) {
    width: 60%;
  }

  &:hover {
    background-color: #f6f8fa;
  }
  svg {
    margin-right: 5px;
  }
`;
const NavigationItemTitle = styled.div`
  
`;
const NavigtaionItemsNum = styled.div`
  border-radius: 20px;
  background-color: #e4e7ea;
  margin-top: 4px;
  margin-left: 5px;
  padding: 0px 8px 0px 8px;
  font-size: 12px;
`;

const Navigation = ({ title, num }) => {
  return (
    <NavigationWrapper>
      {svg[title]}
      <NavigationItemTitle>{title}</NavigationItemTitle>
      <NavigtaionItemsNum>{num}</NavigtaionItemsNum>
    </NavigationWrapper>
  );
};

export default Navigation;
