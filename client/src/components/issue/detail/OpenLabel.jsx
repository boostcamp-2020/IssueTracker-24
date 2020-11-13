import React from 'react';
import styled from 'styled-components';
import svg from '../../../utils/svg';

const Button = styled.div`
  background-color: #2c974b;
  border: 0;
  color: #ffffff;
  border-radius: 4px;
  line-height: 35px;
  font-size: 15px;
  outline: 0;
  padding: 0px 15px 0px 15px;
  margin-right: 10px;
  svg {
    fill: white;
  }
`;

const OpenLabel = () => {
  return (
    <>
      <Button>
        {svg['openLogo']}
        &nbsp;Open
      </Button>
    </>
  );
};

export default OpenLabel;
