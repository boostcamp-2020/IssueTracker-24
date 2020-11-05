import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';
import MarkAsTool from './MarkAsTool';
import FourFilterTools from './FourFilterTools';
import { CHECK_WHOLE_ISSUES } from '../../../pages/issue-list/reducer';

const ToolBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SelectedCount = styled.span`
  margin-left: 15px;
`;

const MenuDropDownWrapper = styled.div`
  position: relative;
`;

const getCheckedIssuesNum = (checkedIssues) => {
  const checkedIssuesCount = checkedIssues.filter(
    (checkedIssue) => checkedIssue.checked === true,
  ).length;
  return checkedIssuesCount == 0 ? '' : `${checkedIssuesCount} selected`;
};

const ToolBar = () => {
  const { dispatch, state } = useContext(IssuesContext);
  const { checkedIssues, wholeCheck } = state;

  const onCilckAllCheckbox = () => {
    dispatch({ type: CHECK_WHOLE_ISSUES, wholeCheck: wholeCheck });
  };

  return (
    <>
      <ToolBarWrapper>
        <div>
          <input
            type="checkbox"
            onClick={onCilckAllCheckbox}
            checked={wholeCheck}
          />
          <SelectedCount>{getCheckedIssuesNum(checkedIssues)}</SelectedCount>
        </div>
        <MenuDropDownWrapper>
          {getCheckedIssuesNum(checkedIssues) ? (
            <MarkAsTool />
          ) : (
            <FourFilterTools />
          )}
        </MenuDropDownWrapper>
      </ToolBarWrapper>
    </>
  );
};

export default ToolBar;
