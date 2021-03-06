import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import ClosedLabel from './ClosedLabel';
import OpenLabel from './OpenLabel';
import { getTimeInfo } from '../../../utils/time';
import { IssueContext } from '../../../pages/IssueDetailPage';
import TitleWrapper from './TitleWrapper';

const IssueDetailHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 10px;
  margin-top: 17px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  color: grey;
  font-size: 15px;
  .description {
    padding-top: 5px;
  }
`;

const IssueDetailPageHeader = memo(() => {
  const { issue, setIssue } = useContext(IssueContext);
  return (
    <>
      <IssueDetailHeaderWrapper>
        <TitleWrapper />
        <DescriptionWrapper>
          {issue.state === 'closed' ? <ClosedLabel /> : <OpenLabel />}
          <div className="description">
            {issue.user.id} opened this issue {getTimeInfo(issue.created_at)}{' '}
            ·&nbsp;
            {issue.comments.length} comments
          </div>
        </DescriptionWrapper>
      </IssueDetailHeaderWrapper>
    </>
  );
});

export default IssueDetailPageHeader;
