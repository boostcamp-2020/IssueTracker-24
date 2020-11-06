import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

const IssueNewContentWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #e8e9ec;
  margin-left: 45px;
  .issue-title {
    width: 85%;
    height: 30px;
    border: 1px solid #e8eaed;
    margin: 20px 20px;
    background-color: #fafbfc;
    font-weight: bold;
    color: #d7dadd;
    padding: 0 20px;
  }
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
  .write-btn {
    width: 70px;
    height: 40px;
    border-radius: 6px 6px 0 0;
    border: 1px solid #e8e9ec;
    border-bottom: 0px;
    margin-left: 20px;
    background-color: #fff;
    z-index: 1;
    cursor: pointer;
  }
  .write-content {
    border: 1px solid #f4f4f6;
    margin-top: -2px;
    border-bottom: 0px;
  }
  .main-content {
    margin: 0 auto;
    margin-top: 20px;
    margin-left: 20px;
    width: 90%;
  }
  .character-length {
    position: relative;
    float: right;
    right: 8%;
    bottom: 30px;
  }
  .input-file-content {
    margin-left: 20px;
    border: 1px solid #f4f4f6;
    width: 90%;
    background-color: #fafbfc;
    z-index: -1;
    cursor: pointer;
  }
  .file-container {
    position: relative;
  }
  .input-label {
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
  }
  .btn-content {
    display: flex;
    justify-content: space-between;
    width: 91%;
    margin-left: 20px;
    margin-top: 20px;
  }
  .cancel-btn {
    font-weight: bold;
    font-size: 15px;
    border: 0px;
    border-radius: 5px;
    padding: 5px;
  }
  .submit-btn {
    background-color: ${(props) =>
      props.disabled === '' ? '#30C453' : '#94D3A2'};
    width: 150px;
    height: 30px;
    color: #ffffff;
    border-radius: 5px;
    border: 0;
  }
`;
const IssueNewContent = () => {
  const [value, setValue] = useState(0);
  const [results, setResults] = useState(['']);
  const [activeBtn, setActiveBtn] = useState('disabled');
  const [title, setTitle] = useState('Title');
  const onChangeTitle = (e) => {
    if (e.target.value.length > 0) setActiveBtn('');
    else setActiveBtn('disabled');
    setTitle(e.target.value);
  };
  const onChangeTextarea = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (value) setResults(`${value.length} Characters`);
      else setResults(`0 Characters`);
      setTimeout(() => {
        setResults('');
      }, 2000);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <>
      <IssueNewContentWrapper disabled={activeBtn}>
        <input
          type="text"
          className="issue-title"
          onChange={onChangeTitle}
          value={title}
        ></input>
        <div className="tabnav-tabs">
          <button className="write-btn">Write</button>
        </div>
        <form className="write-content">
          <textarea
            className="main-content"
            rows="15"
            placeholder="Leave comment"
            onChange={onChangeTextarea}
          ></textarea>
          <div className="character-length">{results} </div>
          <div className="file-container">
            <label className="input-label">
              Attach files by dragging & dropping, selecting or pasting them.
            </label>
            <input type="file" className="input-file-content"></input>
          </div>
          <div className="btn-content">
            <Link to="/issues">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </Link>
            <button type="button" className="submit-btn" disabled={activeBtn}>
              Submit new issue
            </button>
          </div>
        </form>
      </IssueNewContentWrapper>
    </>
  );
};

export default IssueNewContent;
