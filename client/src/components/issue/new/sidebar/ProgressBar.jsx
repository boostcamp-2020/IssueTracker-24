import React from 'react';
import styled from 'styled-components';

const OuterProgressBar = styled.div`
  width: 100%;
  background-color: #ebecf0;
  border-radius: 10px;
  margin: 5px 0;
`;
const InnerProgressBar = styled.div`
  width: ${(props) => props.width}%;
  height: 10px;
  background-color: #5fba5d;
  border-radius: 10px;
`;

const ProgressBar = ({ width }) => {
  return (
    <OuterProgressBar>
      <InnerProgressBar width={width} />
    </OuterProgressBar>
  );
};

export default ProgressBar;
