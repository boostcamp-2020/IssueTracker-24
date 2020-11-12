import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';
import {
  FILTER_YOUR_ISSUES,
  FILTER_OPEN_ISSUES,
  FILTER_ISSUES_ASSIGNED_TO_CURRENT_USER,
  FILTER_CLOSED_ISSUES,
} from '../../../pages/issue-list/reducer';
import { FilterMenuContext } from '../MenuContainer';
import { AppContext } from '../../../App';

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
  const { state, dispatch } = useContext(IssuesContext);
  const { currentUser } = useContext(AppContext);
  const { setFilterMenu } = useContext(FilterMenuContext);
  const filterMenuRef = useRef();

  const onClickYourIssues = (e) => {
    const userId = currentUser.id;
    dispatch({ type: FILTER_YOUR_ISSUES, id: Number(userId) });
    setFilterMenu(false);
    e.stopPropagation();
  };

  const onClickOpenIssues = (e) => {
    dispatch({ type: FILTER_OPEN_ISSUES });
    setFilterMenu(false);
    e.stopPropagation();
  };

  const onClickAssignedToYou = (e) => {
    const userId = currentUser.id;
    dispatch({
      type: FILTER_ISSUES_ASSIGNED_TO_CURRENT_USER,
      id: Number(userId),
    });
    setFilterMenu(false);
    e.stopPropagation();
  };

  const onClickClosedIssues = (e) => {
    dispatch({ type: FILTER_CLOSED_ISSUES });
    setFilterMenu(false);
    e.stopPropagation();
  };

  const onClickFirstItem = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Div ref={filterMenuRef}>
        <MenuItem onClick={onClickFirstItem}>Filter Issues</MenuItem>
        <MenuItem onClick={onClickOpenIssues}>Open issues</MenuItem>
        <MenuItem onClick={onClickYourIssues}>Your issues</MenuItem>
        <MenuItem onClick={onClickAssignedToYou}>
          Everything assigned to you
        </MenuItem>
        <MenuItem onClick={onClickClosedIssues}>Closed issues</MenuItem>
      </Div>
    </>
  );
};

export default FilterMenuDropDown;
