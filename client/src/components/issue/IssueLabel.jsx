import React from 'react';
import styled from 'styled-components';
import IssueContext from '../../context/issues-context';

const IssueLabelWrapper = styled.button`
  background-color: ${(props) => props.color};
  cursor: pointer;
  border-radius: 10%;
  font-weight: bold;
`;
const IssueLabel = ({ label }) => {
  const { id, title, color } = label;
  return (
    <>
      <IssueLabelWrapper key={'label' + id} color={color}>
        <div>{label.title}</div>
      </IssueLabelWrapper>
    </>
  );
};

export default IssueLabel;
