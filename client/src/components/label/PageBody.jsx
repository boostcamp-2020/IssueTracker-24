import React from 'react';
import styled from 'styled-components';

const PageBodyWrapper = styled.div`
  margin: 50px 70px 100px 70px;
  box-sizing: border-box;
`;

const PageBody = ({ children }) => {
  return <PageBodyWrapper>{children}</PageBodyWrapper>;
};
export default PageBody;
