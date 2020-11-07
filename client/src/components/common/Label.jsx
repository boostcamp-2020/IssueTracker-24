import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  height: 25px;
  cursor: pointer;
  border-radius: 10%;
  font-weight: bold;
  margin-left: 5px;
  outline: 0;
`;

const Label = ({ label }) => {
  const { id, title, color } = label;
  return (
    <>
      <LabelWrapper key={'label' + id} color={color}>
        <div>{label.title}</div>
      </LabelWrapper>
    </>
  );
};

export default Label;
