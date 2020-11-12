import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import SmallLabel from '../SmallLabel';
import svg from '../../../utils/svg';
import { addLabel, removeLabel } from '../../../lib/axios/issue';
import { IssueContext } from '../../../pages/IssueDetailPage';
const LabelWrapper = styled.div`
  border-bottom: 1px solid #eaecef;
  cursor: pointer;
  &:hover {
    background-color: #0366d6;
    color: #fff;
  }
  .display-visible {
    visibility: visible;
  }
  .display-hidden {
    visibility: hidden;
  }
`;
const LabelOptionContent = styled.div`
  flex-basis: 80%;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const CheckWrapper = styled.div`
  text-align: center;
  flex-basis: 10%;
`;
const LabelOptionTitle = styled.div``;
const LabelOptionDescription = styled.div`
  display: flex;
  justify-content: center;
`;
const CancelWrapper = styled.div``;
const LabelHeader = styled.div`
  display: flex;
`;
const Label = ({ id, color, title, description }) => {
  const { issue, setIssue } = useContext(IssueContext);
  const [checked, setCheck] = useState(false);
  const checkDisplay = checked ? 'display-visible' : 'display-hidden';
  const handleOnClick = async () => {
    let patchedLabel;
    if (!checked) {
      patchedLabel = await addLabel(issue.id, id);
    } else {
      patchedLabel = await removeLabel(issue.id, id);
    }

    setIssue(patchedLabel);
    setCheck(!checked);
  };
  useEffect(() => {
    if (issue.labels.some((label) => label.id === id)) {
      setCheck(true);
    }
  }, []);
  return (
    <LabelWrapper onClick={handleOnClick}>
      <LabelOptionContent>
        <CheckWrapper className={checkDisplay}>{svg.checkIcon}</CheckWrapper>
        <LabelHeader>
          <SmallLabel color={color} size={14} marginTop={2}></SmallLabel>
          <LabelOptionTitle>{title}</LabelOptionTitle>
        </LabelHeader>
        <CancelWrapper className={checkDisplay}>
          {svg.cancelButton}
        </CancelWrapper>
      </LabelOptionContent>
      <LabelOptionDescription>{description}</LabelOptionDescription>
    </LabelWrapper>
  );
};
export default Label;
