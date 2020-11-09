import React, { useState } from 'react';
import styled from 'styled-components';
import MilestoneNewHeader from '../components/milestone/MilestoneNewHeader';
import Header from '../components/Header';
import InputTitle from '../components/milestone/InputTitle';
import InputWrapper from '../components/milestone/InputWrapper';
import InputDate from '../components/milestone/InputDate';
import DescriptionArea from '../components/milestone/DescriptionArea';
import GreenButton from '../components/common/GreenButton';
import { createMilestone } from '../lib/axios/milestone';
import { useHistory } from 'react-router-dom';

const MilestoneNewPageWrappper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  border-bottom: 1px solid #eaecef;
`;

const ButtonWrapper = styled.div`
  float: right;
  position: relative;
  right: 10%;
  top: 10px;
`;

const MilestoneNewPage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState('');
  const history = useHistory();

  const onClickCreateButton = () => {
    if (!title) {
      alert('제목을 입력해주세요');
      return;
    }
    createMilestone({ title, due_date: date, description });
    history.push('/milestones');
  };

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
        <InputWrapper>
          <div className="title">Description</div>
          <DescriptionArea
            description={description}
            setDescription={setDescription}
          />
        </InputWrapper>
      </MilestoneNewPageWrappper>
      <ButtonWrapper onClick={onClickCreateButton}>
        <GreenButton text={'Create milestone'} />
      </ButtonWrapper>
    </>
  );
};

export default MilestoneNewPage;
