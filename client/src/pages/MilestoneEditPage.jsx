import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getMilestone } from '../lib/axios/milestone';
import MilestoneEditForm from '../components/milestone/MilestoneEditForm';

const MilestoneNewPageWrappper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
`;
const MilestoneEditPage = ({ match }) => {
  return (
    <>
      <MilestoneNewPageWrappper>
        <MilestoneEditForm />
      </MilestoneNewPageWrappper>
    </>
  );
};

export default MilestoneEditPage;
