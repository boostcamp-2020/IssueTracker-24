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

const getCheckedIssuesNum = (renderedIssues) => {
  const renderedIssuesCount = renderedIssues.filter(
    (renderedIssue) => renderedIssue.checked === true,
  ).length;
  return renderedIssuesCount == 0 ? '' : `${renderedIssuesCount} selected`;
};

const ToolBar = () => {
  const { dispatch, state } = useContext(IssuesContext);
  const { renderedIssues, wholeCheck } = state;

  const onCilckAllCheckbox = () => {
    dispatch({ type: CHECK_WHOLE_ISSUES, wholeCheck: wholeCheck });
  };

  return (
    <>
      <ToolBarWrapper>
        <div>
          <input
            type="checkbox"
            onChange={onCilckAllCheckbox}
            checked={wholeCheck}
          />
          <SelectedCount>{getCheckedIssuesNum(renderedIssues)}</SelectedCount>
        </div>
        <MenuDropDownWrapper>
          {getCheckedIssuesNum(renderedIssues) ? (
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
