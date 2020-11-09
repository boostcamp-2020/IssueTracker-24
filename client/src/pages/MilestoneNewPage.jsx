import React, { useState } from 'react';
import styled from 'styled-components';
import MilestoneNewHeader from '../components/milestone/MilestoneNewHeader';
import Header from '../components/Header';
import InputTitle from '../components/milestone/InputTitle';
import InputWrapper from '../components/milestone/InputWrapper';
import InputDate from '../components/milestone/InputDate';

const MilestoneNewPageWrappper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
`;

const MilestoneNewPage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);

  return (
    <>
      <Header />
      <MilestoneNewPageWrappper>
        <MilestoneNewHeader />
        <InputWrapper>
          <div className="title">Title</div>
          <InputTitle title={title} setTitle={setTitle} />
        </InputWrapper>
        <InputWrapper>
          <div className="title">Due date (optional)</div>
          <InputDate date={date} setDate={setDate} />
        </InputWrapper>
      </MilestoneNewPageWrappper>
    </>
  );
};

export default MilestoneNewPage;
