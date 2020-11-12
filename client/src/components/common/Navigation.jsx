import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';

const NavigationWrapper = styled.div`
  display: flex;
`;

const Navigation = ({ cur }) => {
  const history = useHistory();

  const onClickLabels = (e) => {
    history.push('/labels');
    e.stopPropagation();
  };

  const onClickMilestones = (e) => {
    history.push('/milestones');
    e.stopPropagation();
  };

  return (
    <NavigationWrapper>
      <NavigationItem onClick={onClickLabels} category={'Labels'} cur={cur} />
      <NavigationItem
        onClick={onClickMilestones}
        category={'Milestones'}
        cur={cur}
      />
    </NavigationWrapper>
  );
};
export default Navigation;
