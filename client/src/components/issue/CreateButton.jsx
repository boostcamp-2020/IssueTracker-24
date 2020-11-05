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
  .create-issue{
    color:#ffffff;
  }
  .issue-new-btn{
    text-decoration:none;
  }
`;

const CreateButton = () => {
  return (
    <CreateButtonWrapper>
      <Link to="/issues/new" className="issue-new-btn">
        <div className="create-issue btn">New issue</div>
      </Link>
    </CreateButtonWrapper>
  );
};

export default CreateButton;
