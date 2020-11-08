import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import DropDownIcon from '../../common/DropDownIcon';
import FilterForm from './FilterForm';

const FilterBarWrapper = styled.div`
  display: flex;
  width: 60%;
`;

const FilterButton = styled.button`
  font-size: 15px;
  width: 15%;
  height: 35px;
  margin-right: 0;
  box-sizing: border-box;
  border: 1px solid #eaecef;
  border-radius: 4px;
  background-color: #fafbfc;
  outline: 0;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const FilterBar = ({ onClickFilterButton, setFilterMenu }) => {
  const filterButtonRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (filterButtonRef.current && filterButtonRef.current.contains(e.target))
        return;
      setFilterMenu(false);
    });
  }, []);

  return (
    <>
      <FilterBarWrapper>
        <FilterButton onClick={onClickFilterButton} ref={filterButtonRef}>
          Filters
          <DropDownIcon />
        </FilterButton>
        <FilterForm />
      </FilterBarWrapper>
    </>
  );
};

export default FilterBar;
