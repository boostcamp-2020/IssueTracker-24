import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';
import SmallLabel from '../../common/SmallLabel';

const DetailsItem = styled.div`
  display: flex;
  border-bottom: 1px solid #eaecef;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 20px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
  &:nth-child(1) {
    font-weight: 600;
    background-color: #fafbfc;
    cursor: auto;
    &:hover {
      background-color: #fafbfc;
    }
  }
`;

const DetailsMenuDropDown = styled.div`
  width: 250px;
  position: absolute;
  top: 70px;
  left: 20px;
  z-index: 10;
  border: 1px solid #eaecef;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .description {
    width: 185px;
    color: grey;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const LabelMenuDropDown = () => {
  const { state } = useContext(IssuesContext);
  const { labels } = state;

  return (
    <>
      <DetailsMenuDropDown>
        <DetailsItem>Filter by label</DetailsItem>
        <DetailsItem>Unlabeled</DetailsItem>
        {labels.map((label, index) => (
          <DetailsItem key={index}>
            <SmallLabel color={label.color} />
            <LabelWrapper>
              <div>{label.title}</div>
              <div className="description">{label.description}</div>
            </LabelWrapper>
          </DetailsItem>
        ))}
      </DetailsMenuDropDown>
    </>
  );
};

export default LabelMenuDropDown;
