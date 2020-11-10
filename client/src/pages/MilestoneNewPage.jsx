import React, { useState } from 'react';
import styled from 'styled-components';
import MilestoneNewHeader from '../components/milestone/MilestoneNewHeader';
import Header from '../components/Header';
import MilestoneForm from '../components/milestone/MilestoneForm';

const MilestoneNewPageWrappper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
`;

const MilestoneNewPage = () => {
  return (
    <>
      <Header />
      <MilestoneNewPageWrappper>
        <MilestoneNewHeader />
        <MilestoneForm />
      </MilestoneNewPageWrappper>
    </>
  );
};

export default MilestoneNewPage;
