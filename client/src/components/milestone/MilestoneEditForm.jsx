import React from 'react';
import styled from 'styled-components';
import InputWrapper from './InputWrapper';
import InputDate from './InputDate';
import InputTitle from './InputTitle';
import DescriptionArea from './DescriptionArea';
import GreenButton from '../common/GreenButton';
import GreyButton from '../common/GreyButton';
import { updateMilestone, patchMilestone } from '../../lib/axios/milestone';
import { useHistory } from 'react-router-dom';
import { getFormattedDate } from '../../utils/time';

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

const MilestoneEditForm = ({
  id,
  title,
  date,
  description,
  state,
  setTitle,
  setDate,
  setDescription,
}) => {
  const history = useHistory();

  const onClickSave = async () => {
    await updateMilestone(id, {
      title,
      description,
      due_date: date,
      state,
    });
    history.push('/milestones');
  };

  const onClickCancel = () => history.push('/milestones');

  const onClickChangeState = async () => {
    const changedState = state === 'open' ? 'closed' : 'open';
    await patchMilestone(milestoneId, { state: changedState });
    history.push('/milestones');
  };

  return (
    <Form>
      <InputWrapper>
        <div className="title">Title</div>
        <InputTitle title={title} setTitle={setTitle} />
      </InputWrapper>
      <InputWrapper>
        <div className="title">Due date (optional)</div>
        <InputDate
          date={date}
          setDate={setDate}
          value={
            date
              ? getFormattedDate({ date: new Date(date), format: '-' })
              : '연도-월-일'
          }
        />
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
          <GreenButton text={'Save changes'} func={onClickSave} />
        </div>
        <div className="btn">
          <GreyButton
            text={state === 'open' ? 'Close milestone' : 'Reopen milestone'}
            func={onClickChangeState}
          />
        </div>
        <div className="btn">
          <GreyButton text={'Cancel'} func={onClickCancel} />
        </div>
      </ButtonWrapper>
    </Form>
  );
};

export default MilestoneEditForm;
