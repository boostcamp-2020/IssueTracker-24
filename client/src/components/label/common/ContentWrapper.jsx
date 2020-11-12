import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-size: 14px;
  margin: 25px 0 15px 0;

  label {
    font-weight: 600;
    margin-bottom: 7px;
    color: #24292e;
  }

  input {
    height: 25px;
    padding: 2px 5px;
    outline: 0;
    border: 1px solid #e1e4e8;
    border-radius: 5px;
    &:focus {
      border: 0.5px solid #0366d6;
      box-shadow: 0px 0px 2.5px 2.5px #b3d1f3;
    }
  }
`;

const ContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentWrapper;
