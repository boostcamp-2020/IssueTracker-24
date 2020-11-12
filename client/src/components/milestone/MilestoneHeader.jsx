import React from 'react';
import styled from 'styled-components';
import MilestoneSelectMenu from '../milestone/MilestoneSelectMenu';
import Navigation from '../common/Navigation';
import GreenButton from '../common/GreenButton';
import { useHistory } from 'react-router-dom';
const MilestoneHeaderWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  height: 30px;
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const MilestoneHeader = () => {
  let history = useHistory();
  const MilestoneCreate = () => {
    history.push('/milestones/new');
  };
  return (
    <MilestoneHeaderWrapper>
      <NavigationWrapper>
        <Navigation cur={'milestone'} />
        <GreenButton text="New Milestones" func={MilestoneCreate} />
      </NavigationWrapper>
    </MilestoneHeaderWrapper>
  );
};

export default MilestoneHeader;
