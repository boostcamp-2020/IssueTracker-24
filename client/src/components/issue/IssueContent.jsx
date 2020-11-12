import React, { memo } from 'react';
import styled from 'styled-components';
import Label from '../common/Label';
import { getTimeInfo } from '../../utils/time';
import svg from '../../utils/svg';
import { useHistory } from 'react-router-dom';
const IssueContentWrapper = styled.div`
  .issue-title {
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
    margin-left: 20px;
    &: hover {
      color: #0667d5;
    }
  }
  .issue-content {
    margin-left: 20px;
    color: grey;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const IssueContent = memo(({ issue }) => {
  const history = useHistory();
  const moveIssueDetailPage = () => {
    history.push(`/issues/${issue.id}`);
  };
  return (
    <IssueContentWrapper>
      <div>
        <TitleWrapper>
          <div>
            <a className="issue-title" onClick={moveIssueDetailPage}>
              {issue.title}
            </a>
          </div>
          <div>
            {issue.labels.map((label) => (
              <Label key={label.id} label={label} />
            ))}
          </div>
        </TitleWrapper>
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
          &nbsp;&nbsp;
          {issue.milestone && svg['Milestones']}
          {issue.milestone && <span>{issue.milestone.title}</span>}
        </div>
      </div>
    </IssueContentWrapper>
  );
});
export default IssueContent;
