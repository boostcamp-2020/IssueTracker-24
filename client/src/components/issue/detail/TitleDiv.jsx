import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssueContext } from '../../../pages/IssueDetailPage';
import GreyButton from '../../common/GreyButton';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 10;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 7px;
  font-weight: 500;
  .issue-id {
    color: grey;
  }
`;

const TitleDiv = ({ onClickEdit }) => {
  const { issue } = useContext(IssueContext);
  return (
    <Div>
      <Title>
        {issue.title} <span className="issue-id">#{issue.id}</span>
      </Title>
      <GreyButton text={'Edit'} func={onClickEdit} />
    </Div>
  );
};

export default TitleDiv;
