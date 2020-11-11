import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;
const InputFile = styled.input.attrs({
  type: 'file',
})`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const FileText = styled.label`
  cursor: pointer;
  color: grey;
  display: block;
  height: 25px;
  border: 1px solid #eaecef;
  border-radius: 4px;
  font-size: 14px;
`;

const FileContainer = () => {
  return (
    <Container>
      <FileText htmlFor={'file'}>Attach files by clicking here.</FileText>
      <InputFile id={'file'} />
    </Container>
  );
};

export default FileContainer;
