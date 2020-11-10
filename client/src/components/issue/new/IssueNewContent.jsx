import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import GreenButton from '../../common/GreenButton';

const IssueNewContentWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #e8e9ec;
  margin-left: 45px;

  &:before {
    position: absolute;
    display: block;
    content: '';
    width: 0;
    height: 0;
    margin-left: -10px;
    margin-top: 30px;
    transform: scale(3);
    border-right-color: #e8e9ec;
    border-left-color: rgba(255, 255, 255, 0);
    border-top-color: rgba(255, 255, 255, 0);
    border-bottom-color: rgba(255, 255, 255, 0);
    border-style: solid solid outset;
  }
`;
const IssueTitle = styled.input.attrs({
  type: 'text',
  placeholder: 'Title',
})`
  width: 85%;
  height: 30px;
  border: 1px solid #e8eaed;
  margin: 20px 20px;
  background-color: #fafbfc;
  font-weight: bold;
  padding: 0 20px;
`;

const WriteBtn = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 6px 6px 0 0;
  border: 1px solid #e8e9ec;
  border-bottom: 0px;
  margin-left: 20px;
  background-color: #fff;
  z-index: 1;
  cursor: pointer;
`;

const WriteContent = styled.div`
  border: 1px solid #f4f4f6;
  margin-top: -2px;
  border-bottom: 0px;
`;

const MainContent = styled.textarea.attrs({
  rows: '15',
  placeholder: 'Leave comment',
})`
  margin: 0 auto;
  margin-top: 20px;
  margin-left: 20px;
  width: 90%;
`;

const CharacterLength = styled.div`
  position: relative;
  float: right;
  right: 8%;
  bottom: 30px;
`;

const FileContainer = styled.div`
  position: relative;
`;

const InputLabel = styled.div`
  position: absolute;
  margin-left: 20px;
  border: 1px solid #f4f4f6;
  background-color: #fafbfc;
  font-weight: 500;
  font-size: 15px;
  outline: none;
  padding: 3px 3px;
  width: 90%;
  border-radius: 5px;
  pointer-events: none;
`;

const InputFileContent = styled.input.attrs({
  type: 'file',
})`
  margin-left: 20px;
  border: 1px solid #f4f4f6;
  width: 90%;
  background-color: #fafbfc;
  z-index: -1;
  cursor: pointer;
`;
const BtnContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 91%;
  margin-left: 20px;
  margin-top: 20px;
`;
const CancelBtn = styled.button.attrs({
  type: 'button',
})`
  font-weight: bold;
  font-size: 15px;
  border: 0px;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  outline: 0;
  height: 35px;
`;

const IssueNewContent = () => {
  const [value, setValue] = useState(0);
  const [results, setResults] = useState(['']);
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [title, setTitle] = useState('');
  const onChangeTitle = (e) => {
    if (e.target.value.length > 0) setIsDisabledBtn(false);
    else setIsDisabledBtn(true);
    setTitle(e.target.value);
  };
  const onChangeTextarea = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    let innerTimeoutId;
    const timeoutId = setTimeout(() => {
      if (value) setResults(`${value.length} Characters`);
      else setResults(`0 Characters`);
      innerTimeoutId = setTimeout(() => {
        setResults('');
      }, 2000);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(innerTimeoutId);
    };
  }, [value]);

  return (
    <>
      <IssueNewContentWrapper>
        <IssueTitle onChange={onChangeTitle} value={title} />
        <WriteBtn>Write</WriteBtn>
        <WriteContent>
          <MainContent onChange={onChangeTextarea} />
          <CharacterLength>{results}</CharacterLength>
          <FileContainer>
            <InputLabel>
              Attach files by dragging & dropping, selecting or pasting them.
            </InputLabel>
            <InputFileContent />
          </FileContainer>
          <BtnContent>
            <Link to="/issues">
              <CancelBtn>Cancel</CancelBtn>
            </Link>
            <GreenButton text={'Submit new issue'} disabled={isDisabledBtn} />
          </BtnContent>
        </WriteContent>
      </IssueNewContentWrapper>
    </>
  );
};
export default IssueNewContent;
