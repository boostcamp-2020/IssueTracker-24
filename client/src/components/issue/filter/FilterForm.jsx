import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  margin-left: -6px;
  height: 35px;
  width: 85%;
  box-sizing: border-box;
  border: 1px solid #eaecef;
  border-radius: 0 4px 4px 0;
  background-color: #fafbfc;
  position: relative;
  .search-svg {
    margin: 0 8px 0 8px;
    position: absolute;
    top: 7px;
    left: 0px;
  }
`;

const FilterInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Search all issues',
})`
  font-size: 17px;
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
  return (
    <>
      <FormWrapper>
        <FilterInput />
        <svg className="search-svg" width="20" height="20">
          <path
            fillRule="evenodd"
            d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
            fill="#959da5"
          ></path>
        </svg>
      </FormWrapper>
    </>
  );
};

export default FilterForm;
