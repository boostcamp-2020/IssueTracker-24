import React, { useState } from 'react';
import styled from 'styled-components';
import MilestoneNewHeader from '../components/milestone/MilestoneNewHeader';
import Header from '../components/Header';
import MilestoneCreateForm from '../components/milestone/MilestoneCreateForm';

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
        <MilestoneCreateForm />
      </MilestoneNewPageWrappper>
    </>
  );
};

export default MilestoneNewPage;
