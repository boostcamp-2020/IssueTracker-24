import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../pages/issue-list/IssueListPage';
import Navigation from './Navigation';

const NavigationContainerWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  border: 1px solid #eaecef;
  border-radius: 4px;
`;

const NavigationContainer = () => {
  const { state } = useContext(IssuesContext);
  const { labels, milestones } = state;

  return (
    <>
      <NavigationContainerWrapper>
        <Navigation title="Label" num={labels.length} />
        <Navigation title="Milestone" num={milestones.length} />
      </NavigationContainerWrapper>
    </>
  );
};

export default NavigationContainer;
