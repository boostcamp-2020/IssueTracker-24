import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { IssuesContext } from '../../pages/issue-list/IssueListPage';
import Navigation from './Navigation';
import { useHistory } from "react-router-dom";

const NavigationContainerWrapper = styled.div`
  display: flex;
  border: 1px solid #eaecef;
  border-radius: 4px;
  width: 27%;
`;

const NavigationContainer = () => {
  const { state } = useContext(IssuesContext);
  const { labels, milestones } = state;
  let history = useHistory();
  return (
    <>
      <NavigationContainerWrapper>
        <Navigation type="labels" title="Labels" num={labels.length} history={history}/>
        <Navigation type="milestones" title="Milestones" num={milestones.length} history={history}/>
      </NavigationContainerWrapper>
    </>
  );
};

export default NavigationContainer;
