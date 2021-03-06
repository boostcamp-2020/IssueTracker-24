import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MilestoneEditForm from '../components/milestone/MilestoneEditForm';
import Header from '../components/Header';
import { getMilestone } from '../lib/axios/milestone';
import Spinner from '../components/common/Spinner';
import Navigation from '../components/common/Navigation';

const MilestoneNewPageWrappper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
`;

const SelectMenuWrapper = styled.div`
  display: flex;
  height: 35px;
  border-bottom: 1px solid #eaecef;
  margin-top: 15px;
  margin-bottom: 13px;
  padding-bottom: 10px;
`;

const MilestoneEditPage = ({ match }) => {
  const [isCompleteRequest, setIsCompleteRequest] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState('');
  const [state, setState] = useState('');

  useEffect(async () => {
    const milestone = await getMilestone(match.params.id);
    setTitle(milestone.title);
    setDate(milestone.due_date);
    setDescription(milestone.description);
    setState(milestone.state);
    setIsCompleteRequest(true);
  }, []);

  if (!isCompleteRequest) return <Spinner />;

  return (
    <>
      <Header />
      <MilestoneNewPageWrappper>
        <SelectMenuWrapper>
          <Navigation cur={'milestones'} />
        </SelectMenuWrapper>
        <MilestoneEditForm
          id={match.params.id}
          description={description}
          setDescription={setDescription}
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          state={state}
        />
      </MilestoneNewPageWrappper>
    </>
  );
};

export default MilestoneEditPage;
