import React from 'react';
import styled from 'styled-components';

const PageBodyWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 40px;
`;

const PageBody = ({ children }) => {
  return <PageBodyWrapper>{children}</PageBodyWrapper>;
};
export default PageBody;
