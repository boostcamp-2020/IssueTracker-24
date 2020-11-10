import React, { useState } from 'react';
import styled from 'styled-components';
import InputWrapper from './InputWrapper';
import InputDate from './InputDate';
import InputTitle from './InputTitle';
import DescriptionArea from './DescriptionArea';
import GreenButton from '../common/GreenButton';
import GreyButton from '../common/GreyButton';
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
  .btn {
    margin-left: 5px;
  }
`;

const Line = styled.div`
  height: 10px;
  border-bottom: 1px solid #eaecef;
`;

const MilestoneEditForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState('');
  const history = useHistory();

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
      <ButtonWrapper>
        <div className="btn">
          <GreenButton text={'Save changes'} />
        </div>
        <div className="btn">
          <GreyButton text={'Close milestone'} />
        </div>
        <div className="btn">
          <GreyButton text={'Cancel'} />
        </div>
      </ButtonWrapper>
    </Form>
  );
};

export default MilestoneEditForm;
