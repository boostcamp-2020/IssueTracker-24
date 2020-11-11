import React from 'react';
import styled from 'styled-components';
import NavigationTabItem from './NavigationTabItem';
import GreenButton from '../common/GreenButton';

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const NavigationTab = styled.div`
  display: flex;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationTab>
        <NavigationTabItem category={'Labels'} />
        <NavigationTabItem category={'Milestones'} />
      </NavigationTab>
      <GreenButton text={'New label'} />
    </NavigationWrapper>
  );
};
export default Navigation;
