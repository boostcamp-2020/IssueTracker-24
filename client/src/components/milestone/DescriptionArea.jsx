import React, { memo } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  display: block;
  font-size: 17px;
  padding: 3px;
  padding-left: 10px;
  box-sizing: border-box;
  height: 250px;
  width: 900px;
  border: 1px solid #eaecef;
  border-radius: 4px;
  background-color: #fafbfc;
  &:focus {
    outline: none;
    border: 0.5px solid #0366d6;
    border-radius: 0 4px 4px 0;
    box-shadow: 0px 0px 2.5px 2.5px #b3d1f3;
  }
`;

const DescriptionArea = memo(({ description, setDescription }) => {
  const onChangeTextArea = (e) => {
    setDescription(e.target.value);
  };
  return <TextArea value={description} onChange={onChangeTextArea} />;
});

export default DescriptionArea;
