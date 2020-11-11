import React, { useMemo, useContext, useState } from 'react';
import styled from 'styled-components';
import { IssueContext } from '../../../pages/IssueDeatilPage';
import GreyButton from '../../common/GreyButton';

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 10;
  height: 50px;
`;

const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: 'Title',
  value: props.value,
}))`
  display: block;
  padding-3px;
  font-size: 17px;
  padding: 3px;
  padding-left: 10px;
  box-sizing: border-box;
  height: 35px;
  width: 70%;
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

const CancelButton = styled.button`
  cursor: pointer;
  height: 35px;
  font-size: 14px;
  color: blue;
  outline: 0;
  margin-left: 5px;
  background-color: white;
  border: 0;
`;

const TitleForm = ({ onClickCancel }) => {
  const { issue, setIssue } = useContext(IssueContext);
  const [title, setTitle] = useState(issue.title);
  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <Form>
      <Input onChange={onChangeInput} value={title} />
      <div>
        <GreyButton text={'Save'} />
        <CancelButton className="cancel-btn" onClick={onClickCancel}>
          Cancel
        </CancelButton>
      </div>
    </Form>
  );
};

export default TitleForm;
