import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../pages/issue-list/IssueListPage';
import Navigation from './Navigation';

const NavigationContainerWrapper = styled.div`
  display: flex;
  border: 1px solid #eaecef;
  border-radius: 4px;
  width: 25%;
`;

const NavigationContainer = () => {
  const { state } = useContext(IssuesContext);
  const { labels, milestones } = state;

  return (
    <>
      <NavigationContainerWrapper>
        <Navigation title="Labels" num={labels.length} />
        <Navigation title="Milestones" num={milestones.length} />
      </NavigationContainerWrapper>
    </>
  );
};

export default NavigationContainer;
