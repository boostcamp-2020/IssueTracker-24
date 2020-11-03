import React, { useContext } from 'react';
import styled from 'styled-components';
import IssueContext from '../../context/issues-context';
import {
  CHECK_ISSUE,
  UNCHECK_ISSUE,
} from '../../reducers/checked-issue-reducer';

const IssueItemWrapper = styled.div`
  width: 80%;
  height: 20%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #e9e9e9;
  }
  border-radius: 5px;
`;
const IssueItem = ({ issue }) => {
  const { dispatch } = useContext(IssueContext);

  const onCheckBoxChange = (e) => {
    if (e.target.checked) {
      dispatch({ type: CHECK_ISSUE, id: issue.id });
    } else {
      dispatch({ type: UNCHECK_ISSUE, id: issue.id });
    }
  };

  return (
    <>
      <IssueItemWrapper>
        <input type="checkbox" onClick={onCheckBoxChange} />
        <svg>
          <path
            fill-rule="evenodd"
            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
          ></path>
        </svg>
        <div>{issue.id}</div>
        <div>{issue.title}</div>
      </IssueItemWrapper>
    </>
  );
};

export default IssueItem;
