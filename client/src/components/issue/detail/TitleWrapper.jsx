import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import GreyButton from '../../common/GreyButton';
import { IssueContext } from '../../../pages/IssueDetailPage';
import TitleForm from './TitleForm';
import TitleDiv from './TitleDiv';

const Wrapper = styled.div`
  display: flex;
`;

const TitleWrapper = () => {
  const { issue, setIssue } = useContext(IssueContext);
  const [isEditMode, setIsEditMode] = useState(false);

  const onClickEdit = () => setIsEditMode(true);
  const onClickCancel = () => setIsEditMode(false);

  return (
    <Wrapper>
      {isEditMode ? (
        <TitleForm onClickCancel={onClickCancel} />
      ) : (
        <TitleDiv onClickEdit={onClickEdit} />
      )}
    </Wrapper>
  );
};

export default TitleWrapper;
