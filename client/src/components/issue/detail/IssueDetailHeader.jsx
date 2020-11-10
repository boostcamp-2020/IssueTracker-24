import React, { memo } from 'react';
import styled from 'styled-components';
import GreyButton from '../../common/GreyButton';
import CloseLabel from './CloseLabel';
import OpenLabel from './OpenLabel';
import { getTimeInfo } from '../../../utils/time';

const IssueDetailHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 10px;
  margin-top: 17px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .issue-id {
    color: grey;
  }
  .title {
    margin: 0;
    margin-bottom: 7px;
    font-weight: 500;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  color: grey;
  font-size: 15px;
  .description {
    padding-top: 5px;
  }
`;

const IssueDetailHeader = memo(
  ({ user, title, createdDate, commentsLength, state }) => {
    return (
      <>
        <IssueDetailHeaderWrapper>
          <TitleWrapper>
            <h1 className="title">
              {title} <span className="issue-id">#1</span>
            </h1>
            <GreyButton text={'Edit'} />
          </TitleWrapper>
          <DescriptionWrapper>
            {state === 'close' ? <CloseLabel /> : <OpenLabel />}
            <div className="description">
              {user && user.id} opened this issue {getTimeInfo(createdDate)}{' '}
              ·&nbsp;
              {commentsLength} comments
            </div>
          </DescriptionWrapper>
        </IssueDetailHeaderWrapper>
      </>
    );
  },
);

export default IssueDetailHeader;
