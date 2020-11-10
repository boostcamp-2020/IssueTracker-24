import React, { useState, useEffect, useRef, useContext } from 'react';
import { IssueOptionContext } from '../../../../pages/issue-new/IssueNewPage';
import SelectedLabel from './SelectedLabel';
import styled from 'styled-components';
import Heading from './Heading';
import Dropdown from './Dropdown';

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

const SidebarItem = ({ title, type, stateMsg, component, data }) => {
  const ref = useRef();
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState([]);
  const { dispatch } = useContext(IssueOptionContext);
  const Component = component;

  const addChecked = (newChecked) => {
    setChecked([...checked, newChecked]);
  };
  const removeChecked = (newUnchecked) => {
    setChecked(checked.filter((item) => item.id !== newUnchecked.id));
  };

  useEffect(() => {
    const clickBody = (e) => {
      if (ref.current && ref.current.contains(e.target)) return;
      setShow(false);
    };
    document.body.addEventListener('click', clickBody);

    return () => {
      document.body.removeEventListener('click', clickBody);
    };
  }, []);

  useEffect(() => {
    if (!show && checked.length > 0) {
      dispatch({
        type,
        toAdd: checked,
      });
    }
  }, [show]);

  const handleOnClick = () => {
    setShow(!show);
  };

  const renderedAddedList = (Component, title) => {
    switch (title) {
      case 'Assignees':
        return checked.map((addedItem, index) => (
          <Component
            key={'addedList' + index}
            option={addedItem}
            fontSize={12}
          />
        ));
      case 'Labels':
        return checked.map((addedItem, index) => (
          <SelectedLabel key={'addedLabel' + index} label={addedItem} />
        ));
      case 'Milestone':
        return;
    }
  };

  return (
    <SidebarItemWrapper ref={ref}>
      <Heading title={title} onClick={handleOnClick} show={show} />
      {checked && checked.length > 0 ? (
        renderedAddedList(Component, title)
      ) : (
        <StateMsg>{stateMsg}</StateMsg>
      )}
      <Dropdown
        show={show}
        add={addChecked}
        remove={removeChecked}
        component={component}
        data={data}
      />
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
