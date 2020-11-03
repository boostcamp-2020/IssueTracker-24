import React from 'react';
import styled from 'styled-components';

const FilterBarWrapper = styled.div`
  display: flex;
`;

const FilterButton = styled.button`
  font-size: 15px;
  width: 100px;
  height: 35px;
  margin-right: 0;
  box-sizing: border-box;
  border: 2px solid #eaecef;
  border-radius: 4px;
  background-color: #fafbfc;
  outline: 0;
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
  border: 2px solid #eaecef;
  outline: 0;
  border-radius: 0 4px 4px 0;
`;

const FilterBar = () => {
  return (
    <>
      <FilterBarWrapper>
        <FilterButton>
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
