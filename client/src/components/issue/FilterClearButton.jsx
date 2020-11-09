import React from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';

const ClearButton = styled.button`
  border: 0;
  background: white;
  color: #586069;
  display: flex;
  align-items: center;
  outline: 0;
  padding-left: 0;
  & svg {
    background-color: #6a737d;
    border-radius: 5px;
    fill: white;
    margin-right: 10px;
  }
  & span {
    font-weight: bold;
  }
  &: hover {
    cursor: pointer;
    color: #0366d6;
    & svg {
      background-color: #0366d6;
    }
  }
`;

const FilterClearButton = () => {
  return (
    <ClearButton>
      {svg['cancelButton']}
      <span>Clear current search query, filters, and sorts</span>
    </ClearButton>
  );
};

export default FilterClearButton;
