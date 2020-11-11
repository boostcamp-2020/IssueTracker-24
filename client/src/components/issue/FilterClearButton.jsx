import React, { useContext } from 'react';
import styled from 'styled-components';
import svg from '../../utils/svg';
import { IssuesContext } from '../../pages/issue-list/IssueListPage';
import { CLEAR_FILTER_ISSUES } from '../../pages/issue-list/reducer';

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
    svg {
      background-color: #0366d6;
    }
  }
`;

const FilterClearButton = () => {
  const { dispatch } = useContext(IssuesContext);
  const onClickClearButton = () => dispatch({ type: CLEAR_FILTER_ISSUES });

  return (
    <ClearButton onClick={onClickClearButton}>
      {svg['cancelButton']}
      <span>Clear current search query, filters, and sorts</span>
    </ClearButton>
  );
};

export default FilterClearButton;
