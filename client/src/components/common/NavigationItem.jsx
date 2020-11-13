import React from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';

const NavigationItemWrapper = styled.div`
  padding: 0px 15px;
  border-top: 1px solid #eaecef;
  border-bottom: 1px solid #eaecef;
  cursor: pointer;
  svg {
    margin-right: 4px;
  }
  &:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border-left: 1px solid #eaecef;

    background-color: ${({ cur }) => (cur === 'labels' ? '#0366d6' : 'white')};
    color: ${({ cur }) => (cur === 'labels' ? 'white' : 'black')};
    svg {
      fill: ${({ cur }) => (cur === 'labels' ? 'white' : 'black')};
    }
    &:hover {
      background-color: ${({ cur }) =>
        cur === 'labels' ? '#0366d6' : '#f6f8fa'};
    }
  }
  &:last-child {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    border-left: 1px solid #eaecef;
    border-right: 1px solid #eaecef;

    background-color: ${({ cur }) =>
      cur === 'milestones' ? '#0366d6' : 'white'};
    color: ${({ cur }) => (cur === 'milestones' ? 'white' : 'black')};
    svg {
      fill: ${({ cur }) => (cur === 'milestones' ? 'white' : 'black')};
    }
    &:hover {
      background-color: ${({ cur }) =>
        cur === 'milestones' ? '#0366d6' : '#f6f8fa'};
    }
  }
  .NavItemInnerWrapper {
    display: flex;
    align-items: center;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
  }
`;

const NavigtaionItemsNum = styled.div`
  height: 18px;
  line-height: 18px;
  border-radius: 20px;
  background-color: #e4e7ea;
  margin-left: 5px;
  padding: 0px 8px 0px 8px;
  font-size: 12px;
`;

const NavigationItem = ({ category, cur, onClick, num }) => {
  return (
    <NavigationItemWrapper cur={cur}>
      <div className="NavItemInnerWrapper" onClick={onClick}>
        {svg[category]}
        {category}
        {num && <NavigtaionItemsNum>{num}</NavigtaionItemsNum>}
      </div>
    </NavigationItemWrapper>
  );
};
export default NavigationItem;
