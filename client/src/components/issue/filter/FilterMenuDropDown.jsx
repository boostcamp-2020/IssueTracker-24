import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 300px;
  position: absolute;
  left: 10%;
  z-index: 10;
  border: 1px solid #eaecef;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
`;

const MenuItem = styled.div`
  border-bottom: 1px solid #eaecef;
  height: 35px;
  box-sizing: border-box;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
  &:nth-child(1) {
    font-weight: 600;
    background-color: #fafbfc;
    cursor: auto;
    &:hover {
      background-color: #fafbfc;
    }
  }
`;

const FilterMenuDropDown = () => {
  return (
    <>
      <Div>
        <MenuItem>Filter Issues</MenuItem>
        <MenuItem>Open Issues</MenuItem>
        <MenuItem>Your issues</MenuItem>
        <MenuItem>Everything assigned to you</MenuItem>
        <MenuItem>Everything mentioning you</MenuItem>
        <MenuItem>Closed issues</MenuItem>
      </Div>
    </>
  );
};

export default FilterMenuDropDown;
