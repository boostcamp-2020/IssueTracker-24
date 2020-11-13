import React, { memo } from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: 'date',
  value: props.value,
}))`
  display: block;
  padding-3px;
  font-size: 17px;
  padding: 3px;
  padding-left: 10px;
  box-sizing: border-box;
  height: 35px;
  width: 500px;
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

const InputDate = memo(({ setDate, value }) => {
  const onChangeInput = (e) => {
    setDate(e.target.value);
  };
  return <Input onChange={onChangeInput} value={value} />;
});

export default InputDate;
