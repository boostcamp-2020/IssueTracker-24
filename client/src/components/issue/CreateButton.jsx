import React from 'react';
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

const CreateButtonWrapper = styled.div`
  background-color: #2c974b;
  color: #ffffff;
  border-radius: 4px;
  line-height: 35px;
  font-size: 14px;
  font-weight: bold;
  padding: 0px 15px 0px 15px;
  cursor: pointer;
  &:hover {
    background-color: #04c584;
  }

  .issue-new-btn{
    text-decoration:none;
  }
`;

const CreateIssueBtn = styled.div`
    color:#ffffff;
`;

const CreateButton = () => {
  return (
    <CreateButtonWrapper>
      <Link to="/issues/new" className="issue-new-btn">
        <CreateIssueBtn>New issue</CreateIssueBtn>
      </Link>
    </CreateButtonWrapper>
  );
};

export default CreateButton;
