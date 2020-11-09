import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Dropdown from './Dropdown';
import { IssueOptionContext } from '../../../../pages/issue-new/IssueNewPage';

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

const SidebarItem = ({ title, stateMsg, item }) => {
  const { state } = useContext(IssueOptionContext);
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

  return (
    <SidebarItemWrapper ref={ref}>
      <Heading title={title} onClick={handleOnClick} />
      <StateMsg>{stateMsg}</StateMsg>
      <Dropdown show={show} item={item} data={state[item]} />
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
