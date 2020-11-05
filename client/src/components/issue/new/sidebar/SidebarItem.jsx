import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Dropdown from './Dropdown';
// import { getAllLabels } from '../../../../lib/axios/label';
// import { getAllMilestones } from '../../../../lib/axios/milestone.js';

const SidebarItemWrapper = styled.div`
  position: relative;
  .state-msg {
    color: #586069;
    font-size: 12px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eaecef;
  }
  padding-top: 16px;
  padding-bottom: 16px;
`;

const labels = [
  {
    id: 1,
    title: 'Frontend',
    description: 'Something in Frontend',
    color: '#AAED8B',
  },
  { id: 2, title: 'Must', description: '우선순위: 상', color: '#E57559' },
];
const milestones = [
  {
    id: 1,
    title: 'sprint1',
    description: 'sprint1',
    due_date: '2020-11-03 17:47:08',
    state: 'closed',
  },
  {
    id: 2,
    title: 'sprint2',
    description: 'sprint2',
    due_date: '2020-11-010 17:47:08',
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
      <div className="state-msg">{stateMsg}</div>
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
