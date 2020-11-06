import React from 'react';
import styled from 'styled-components';
import Label from '../label/Label';
import { getTimeInfo } from '../../utils/time';

const IssueContentWrapper = styled.div`
  .issue-title {
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    margin-left: 20px;
  }
  .issue-content {
    margin-left: 20px;
    color: grey;
  }
`;

const IssueContent = ({ issue }) => {
  return (
    <IssueContentWrapper>
      <div>
        <div>
          <a className="issue-title">{issue.title}</a>
          {issue.labels.map((label) => (
            <Label key={label.id} label={label} />
          ))}
        </div>
        <div className="issue-content">
          <span>
            {issue.state === 'open'
              ? `#${issue.id} opened ${getTimeInfo(issue.created_at)} by ${
                  issue.user.sns_id
                }`
              : `#${issue.id} by ${issue.user.sns_id} was closed ${getTimeInfo(
                  issue.closed_at,
                )}`}
          </span>
        </div>
      </div>
    </IssueContentWrapper>
  );
};
export default IssueContent;
