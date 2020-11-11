import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  button {
    margin-left: 5px;
  }
`;

const ContentButtonContainer = memo(({ children }) => {
  return <Container>{children}</Container>;
});

export default ContentButtonContainer;
