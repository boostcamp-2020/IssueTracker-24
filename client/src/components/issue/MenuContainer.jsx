import React from 'react';
import styled from 'styled-components';
import FilterBar from './filter/FilterBar';
import NavigationContainer from './NavigationContainer';
import CreateButton from './CreateButton';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
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
        <NavigationContainer />
        <CreateButton />
      </Div>
    </>
  );
};

export default MenuContainer;
