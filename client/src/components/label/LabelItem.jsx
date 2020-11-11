import React from 'react';
import styled from 'styled-components';
import SelectedLabel from '../common/SelectedLabel';

const LabelItemWrapper = styled.div`
  display: flex;
  border: 1px solid #eaecef;
  border-top: none;
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  &:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`;
const LabelTitle = styled.div`
  flex-basis: 25%;
`;
const LabelDescription = styled.div`
  flex-basis: 65%;
  color: #586069;
  font-size: 12px;
`;
const LabelEdit = styled.div`
  flex-basis: 4%;
  text-align: center;
  color: #586069;
  font-size: 12px;
`;
const LabelDelete = styled.div`
  flex-basis: 7%;
  text-align: center;
  color: #586069;
  font-size: 12px;
`;

const LabelItem = ({ label }) => {
  return (
    <LabelItemWrapper>
      <LabelTitle>
        <SelectedLabel label={label} />
      </LabelTitle>
      <LabelDescription>{label.description}</LabelDescription>
      <LabelEdit>Edit</LabelEdit>
      <LabelDelete>Delete</LabelDelete>
    </LabelItemWrapper>
  );
};

export default LabelItem;
