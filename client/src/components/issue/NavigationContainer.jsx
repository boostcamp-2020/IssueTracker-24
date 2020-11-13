import React, { useContext } from 'react';
import { IssuesContext } from '../../pages/issue-list/IssueListPage';
import Navigation from '../common/Navigation';

const NavigationContainer = () => {
  const { state } = useContext(IssuesContext);
  const { labels, milestones } = state;

  return (
    <>
      <Navigation
        cur={'issues'}
        labelsNum={labels.length}
        milestonesNum={milestones.length}
      />
    </>
  );
};

export default NavigationContainer;
