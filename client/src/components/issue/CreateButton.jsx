import React from 'react';
import styled from 'styled-components';

const CreateButtonWrapper = styled.div`
  background-color: #2c974b;
  color: #ffffff;
  border-radius: 4px;
  line-height: 35px;
  font-size: 14px;
  font-weight: bold;
  padding: 0px 15px 0px 15px;
`;

const CreateButton = () => {
  return (
    <CreateButtonWrapper>
      <div className="create-issue btn">New issue</div>
    </CreateButtonWrapper>
  );
};

export default CreateButton;
