import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { IssueContext } from '../../../pages/IssueDetailPage';
import IssueInfo from './IssueInfo';

const IssueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`;

const Issue = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const onClickEdit = () => setIsEditMode(true);

  return (
    <IssueWrapper>
      <IssueInfo onClickEdit={onClickEdit} />
    </IssueWrapper>
  );
};

export default Issue;
