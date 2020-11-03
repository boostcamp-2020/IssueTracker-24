import React from 'react';
import styled from 'styled-components';
import FilterBar from './filter/FilterBar';

const Div = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  margin-top: 70px;
  margin-bottom: 40px;
`;

const MenuContainer = () => {
  return (
    <>
      <Div>
        <FilterBar />
      </Div>
    </>
  );
};

export default MenuContainer;
