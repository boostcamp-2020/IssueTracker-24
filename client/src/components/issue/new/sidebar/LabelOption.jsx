import React, { useState } from 'react';
import styled from 'styled-components';
import SmallLabel from '../../../common/SmallLabel';
import svg from '../../../../utils/svg.js';

const LabelOptionWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  color: #586069;
  font-size: 12px;

  &:hover {
    background-color: #0366d6;
    color: white;
  }

  .display-visible {
    visibility: visible;
  }
  .display-hidden {
    visibility: hidden;
  }
`;
const LabelOptionContent = styled.div`
  flex-grow: 8;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const LabelOptionContentHeader = styled.div`
  display: flex;
`;
const LabelOptionTitle = styled.div``;
const LabelOptionDescription = styled.div``;
const CheckWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
`;
const CancelWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const LabelOption = ({ option, add, remove }) => {
  const [checked, setCheck] = useState(false);
  const checkDisplay = checked ? 'display-visible' : 'display-hidden';
  const handleOnClick = () => {
    if (!add || !remove) return;
    if (!checked) {
      add(option);
    }
    if (checked) {
      remove(option);
    }
    setCheck(!checked);
  };

  return (
    <LabelOptionWrapper onClick={handleOnClick} color={option.color}>
      <CheckWrapper className={checkDisplay}>{svg.checkIcon}</CheckWrapper>
      <LabelOptionContent>
        <LabelOptionContentHeader>
          <SmallLabel color={option.color} size={14} marginTop={2} />
          <LabelOptionTitle>{option.title}</LabelOptionTitle>
        </LabelOptionContentHeader>
        <LabelOptionDescription>{option.description}</LabelOptionDescription>
      </LabelOptionContent>
      <CancelWrapper className={checkDisplay}>{svg.cancelButton}</CancelWrapper>
    </LabelOptionWrapper>
  );
};

export default LabelOption;
