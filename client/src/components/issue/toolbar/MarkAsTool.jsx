import React, { useState } from 'react';
import styled from 'styled-components';
import DropDownIcon from '../DropDownIcon';

const DetailsButton = styled.button`
  font-size: 15px;
  height: 35px;
  margin-right: 0;
  box-sizing: border-box;
  background-color: #e9e9e9;
  border: 0;
  outline: 0;
  color: #586069;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const DetailsMenuDropDown = styled.div`
  width: 140px;
  position: absolute;
  top: 70px;
  left: -20px;
  z-index: 10;
  border: 1px solid #eaecef;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
`;

const DetailsItem = styled.div`
  border-bottom: 1px solid #eaecef;
  height: 32px;
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

const MarkAsTool = () => {
  const [isShowMarkAs, setShowMarkAs] = useState(false);
  const onClickDetailsButton = () => setShowMarkAs(!isShowMarkAs);

  return (
    <>
      <DetailsButton onClick={onClickDetailsButton}>
        Mark as
        <DropDownIcon />
      </DetailsButton>
      {isShowMarkAs && (
        <DetailsMenuDropDown>
          <DetailsItem>Actions</DetailsItem>
          <DetailsItem>open</DetailsItem>
          <DetailsItem>closed</DetailsItem>
        </DetailsMenuDropDown>
      )}
    </>
  );
};

export default MarkAsTool;
