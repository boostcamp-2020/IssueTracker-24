import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Dropdown from './Dropdown';
// import { getAllLabels } from '../../../../lib/axios/label';
// import { getAllMilestones } from '../../../../lib/axios/milestone.js';

const SidebarItemWrapper = styled.div`
  position: relative;
  padding-top: 16px;
  padding-bottom: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid #eaecef;
  }
`;
const StateMsg = styled.div`
  color: #586069;
  font-size: 12px;
`;
const labels = [
  {
    id: 1,
    title: 'Frontend',
    description: 'Something in Frontend',
    color: '#AAED8B',
  },
  {
    id: 2,
    title: 'Backend',
    description: 'Something in Backend : 백엔드',
    color: '#0052CC',
  },
  { id: 3, title: 'Environment', description: '환경설정', color: '#F9D0C4' },
  {
    id: 4,
    title: 'Bugfix: build',
    description: '빌드 관련 버그 수정',
    color: '#D73A4A',
  },
  { id: 5, title: '🥇Must', description: '우선순위: 상', color: '#E57559' },
  { id: 6, title: '🥈Should', description: '우선순위: 중', color: '#E57559' },
  { id: 7, title: '🥉Could', description: '우선순위: 하', color: '#E57559' },
];
const milestones = [
  {
    id: 1,
    title: 'sprint-1',
    description: 'sprint 1주차',
    due_date: '2020-11-03 24:00:00',
    state: 'closed',
  },
  {
    id: 2,
    title: 'sprint-2',
    description: 'sprint 2주차',
    due_date: '2020-11-10 24:00:00',
    state: 'open',
  },
  {
    id: 3,
    title: 'sprint-3',
    description: 'sprint 3주차',
    due_date: '2020-11-17 24:00:00',
    state: 'open',
  },
];
const users = [
  { id: 1, sns_id: 'qkrrlgh519' },
  { id: 2, sns_id: 'mu1616' },
  { id: 3, sns_id: 'jch422' },
  { id: 4, sns_id: 'thdwlsgus0' },
];
const data = {
  assignees: users,
  labels,
  milestones,
};

const SidebarItem = ({ title, stateMsg, item }) => {
  const [show, setShow] = useState(false);

  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (ref.current && ref.current.contains(e.target)) return;
      setShow(false);
    });
  }, []);

  const handleOnClick = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <SidebarItemWrapper ref={ref}>
      <Heading title={title} onClick={handleOnClick} />
      <StateMsg>{stateMsg}</StateMsg>
      <Dropdown
        show={show}
        item={item}
        data={data[item]}
        handleClose={hideDropdown}
      />
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
