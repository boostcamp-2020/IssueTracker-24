import React from 'react';
import styled from 'styled-components';

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

const DropDownIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

const FilterText = styled.input.attrs({
  type: 'text',
})`
  margin-left: -6px;
  height: 35px;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #eaecef;
  outline: 0;
  border-radius: 0 4px 4px 0;
  background-color: #fafbfc;
  width: 85%;
`;

const FilterBar = ({ onClickFilterButton }) => {
  return (
    <>
      <FilterBarWrapper>
        <FilterButton onClick={onClickFilterButton}>
          Filters
          <DropDownIcon className="material-icons">
            arrow_drop_down
          </DropDownIcon>
        </FilterButton>
        <FilterText />
      </FilterBarWrapper>
    </>
  );
};

export default FilterBar;
