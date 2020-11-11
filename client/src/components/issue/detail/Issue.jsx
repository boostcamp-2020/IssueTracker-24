import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { IssueContext } from '../../../pages/IssueDetailPage';
import IssueInfo from './IssueInfo';
import IssueForm from './IssueForm';

const IssueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`;

const Issue = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const onClickEdit = () => setIsEditMode(true);
  const onClickCancel = () => setIsEditMode(false);

  return (
    <IssueWrapper>
      {isEditMode ? (
        <IssueForm onClickCancel={onClickCancel} />
      ) : (
        <IssueInfo onClickEdit={onClickEdit} />
      )}
    </IssueWrapper>
  );
};

export default Issue;
