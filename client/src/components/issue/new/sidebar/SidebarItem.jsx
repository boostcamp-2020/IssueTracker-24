import React, { useState, useEffect, useRef, useContext } from 'react';
import { IssueOptionContext } from '../../../../pages/issue-new/IssueNewPage';
import { AppContext } from '../../../../App';
import SelectedLabel from '../../../common/SelectedLabel';
import SelectedMilestone from './SelectedMilestone';
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
  .assigneesInnerDiv {
    display: flex;
    .assignSelfBtn {
      color: #586069;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
const StateMsg = styled.div`
  color: #586069;
  font-size: 12px;
`;

const SidebarItem = ({ title, type, header, stateMsg, component, data }) => {
  const ref = useRef();
  const { dispatch } = useContext(IssueOptionContext);
  const { currentUser } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState([]);
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
    if (!show) {
      dispatch({
        type,
        toAdd: checked,
      });
    }
  }, [show]);

  const handleOnClick = () => {
    setShow(!show);
  };

  const onAssignSelfClick = () => {
    dispatch({
      type,
      toAdd: [currentUser],
    });
    addChecked(currentUser);
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
        return <SelectedMilestone milestone={checked[0]} />;
    }
  };

  return (
    <SidebarItemWrapper ref={ref}>
      <Heading title={title} onClick={handleOnClick} show={show} />
      {!show && checked && checked.length > 0 ? (
        renderedAddedList(Component, title)
      ) : title === 'Assignees' ? (
        <div className="assigneesInnerDiv">
          <StateMsg>{stateMsg}—</StateMsg>
          <div className="assignSelfBtn" onClick={onAssignSelfClick}>
            assign yourself
          </div>
        </div>
      ) : (
        <StateMsg>{stateMsg}</StateMsg>
      )}

      <Dropdown
        show={show}
        setShow={setShow}
        add={addChecked}
        remove={removeChecked}
        added={checked}
        set={setChecked}
        get={checked[0]}
        header={header}
        component={component}
        data={data}
      />
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
