import React, { useState } from 'react';
import styled from 'styled-components';
import InputWrapper from './InputWrapper';
import InputDate from './InputDate';
import InputTitle from './InputTitle';
import DescriptionArea from './DescriptionArea';
import GreenButton from '../common/GreenButton';
import { createMilestone } from '../../lib/axios/milestone';
import { useHistory } from 'react-router-dom';

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
`;

const Line = styled.div`
  height: 10px;
  border-bottom: 1px solid #eaecef;
`;

const MilestoneCreateForm = () => {
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
    location.reload();
  };

  return (
    <Form>
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
      <Line />
      <ButtonWrapper onClick={onClickCreateButton}>
        <GreenButton text={'Create milestone'} />
      </ButtonWrapper>
    </Form>
  );
};

export default MilestoneCreateForm;
