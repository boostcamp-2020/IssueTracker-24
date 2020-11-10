import React from 'react';
import styled from 'styled-components';
import GreyButton from '../../common/GreyButton';
import CloseLabel from './CloseLabel';
import OpenLabel from './OpenLabel';

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

const IssueDetailHeader = () => {
  const state = 'close';
  return (
    <>
      <IssueDetailHeaderWrapper>
        <TitleWrapper>
          <h1 className="title">
            레이블 목록 보기 구현 <span className="issue-id">#1</span>
          </h1>
          <GreyButton text={'Edit'} />
        </TitleWrapper>
        <DescriptionWrapper>
          {state === 'close' ? <CloseLabel /> : <OpenLabel />}
          <div className="description">
            Sejungkim opened this issue 3 days ago · 1 comments
          </div>
        </DescriptionWrapper>
      </IssueDetailHeaderWrapper>
    </>
  );
};

export default IssueDetailHeader;
