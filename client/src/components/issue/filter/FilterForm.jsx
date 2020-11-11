import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import svg from '../../../utils/svg';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';
import { FILTER_ISSUES_BY_TEXT } from '../../../pages/issue-list/reducer';

const FormWrapper = styled.form`
  margin-left: -6px;
  height: 35px;
  width: 85%;
  box-sizing: border-box;
  border: 1px solid #eaecef;
  border-radius: 0 4px 4px 0;
  background-color: #fafbfc;
  position: relative;
  & svg {
    margin: 0 8px 0 8px;
    position: absolute;
    top: 7px;
    left: 0px;
  }
`;

const FilterInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Search all issues',
}))`
  font-size: 15px;
  padding-left: 6%;
  height: 29px;
  width: 93.5%;
  border: none;
  color: #6a737d;
  &:focus {
    outline: none;
    border: 0.5px solid #0366d6;
    border-radius: 0 4px 4px 0;
    box-shadow: 0px 0px 2.5px 2.5px #b3d1f3;
  }
`;

const FilterForm = () => {
  const { state, dispatch } = useContext(IssuesContext);
  const { searchText } = state;
  const [filterText, setFilterText] = useState(searchText);

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch({ type: FILTER_ISSUES_BY_TEXT, filterText });
  };

  const onChangeInput = (e) => setFilterText(e.target.value);

  useEffect(() => {
    setFilterText(searchText);
  }, [searchText]);

  return (
    <>
      <FormWrapper onSubmit={onSubmitForm}>
        <FilterInput value={filterText} onChange={onChangeInput} />
        {svg['magnifyingGlass']}
      </FormWrapper>
    </>
  );
};

export default FilterForm;
