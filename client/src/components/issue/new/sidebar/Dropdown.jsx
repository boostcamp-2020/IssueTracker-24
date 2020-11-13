import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  overflow-y: ${(props) => props.overflow};
  position: absolute;
  top: 40px;
  border: 1px solid #eaecef;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px #e7e7e7;
  background-color: white;
  width: 105%;
  min-width: 240px;
  z-index: 2;
  max-height: 300px;

  &.display-block {
    display: block;
  }

  &.display-none {
    display: none;
    border: 1px solid green;
  }

  .dropdown-option:not(:last-child) {
    border-bottom: 1px solid #eaecef;
  }
`;

const DropdownHeader = styled.div`
  font-size: 12px;
  font-weight: bold;
  padding: 5px 0px 5px 8px;
  border-bottom: 1px solid #eaecef;
`;

const Dropdown = memo(
  ({ show, setShow, add, remove, set, get, header, component, data }) => {
    const [overflow, setOverflow] = useState('auto');
    const wrapperRef = useRef();
    const dropdownDisplay = show ? 'display-block' : 'display-none';
    const Component = component;

    const options = data.map((option, index) => (
      <div className="dropdown-option" key={'dropdown' + index}>
        <Component
          option={option}
          setShow={setShow}
          add={add}
          remove={remove}
          set={set}
          get={get}
          padding={5}
          size={18}
        />
      </div>
    ));

    useEffect(() => {
      if (wrapperRef.current.clientHeight > 300) {
        setOverflow('scroll');
        wrapperRef.current.style.height = '300px';
      }
    }, [show]);

    return (
      <DropdownWrapper
        className={dropdownDisplay}
        ref={wrapperRef}
        overflow={overflow}
      >
        <DropdownHeader>{header}</DropdownHeader>
        {options}
      </DropdownWrapper>
    );
  },
);

export default Dropdown;
