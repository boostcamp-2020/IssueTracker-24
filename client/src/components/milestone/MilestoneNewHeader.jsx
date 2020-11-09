import React, { memo, useMemo } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  margin-top: -10px;
  font-size: 16px;
  .grey {
    color: grey;
  }
  .blue {
    color: blue;
  }
`;
const MilestoneNewHeader = memo(() => {
  return (
    <Header>
      <h2>New milestone</h2>
      <Description>
        <span class="grey">
          Create a new milestone to help organize your issues and pull requests.
          Learn more about
        </span>
        <span class="blue"> milestones and issues.</span>
      </Description>
    </Header>
  );
});

export default MilestoneNewHeader;
