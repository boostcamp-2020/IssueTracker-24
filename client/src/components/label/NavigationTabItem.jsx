import React from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg.js';

const NavigationTabItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  padding: 0px 15px;
  svg {
    margin-right: 4px;
  }
  border-top: 1px solid #eaecef;
  border-bottom: 1px solid #eaecef;
  &:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border-left: 1px solid #eaecef;
    background-color: #0366d6;
    color: #ffffff;
    svg {
      fill: white;
    }
  }
  &:last-child {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    border-left: 1px solid #eaecef;
    border-right: 1px solid #eaecef;
    &:hover {
      background-color: #f6f8fa;
      cursor: pointer;
    }
  }
`;

const NavigationTabItem = ({ category }) => {
  return (
    <NavigationTabItemWrapper>
      {svg[category]}
      {category}
    </NavigationTabItemWrapper>
  );
};
export default NavigationTabItem;
