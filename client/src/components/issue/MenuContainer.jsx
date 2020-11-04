import React, { useState } from 'react';
import styled from 'styled-components';
import FilterBar from './filter/FilterBar';
import NavigationContainer from './NavigationContainer';
import CreateButton from './CreateButton';
import FilterMenuDropDown from './filter/FilterMenuDropDown';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  margin-top: 70px;
  margin-bottom: 40px;
`;

const MenuContainer = () => {
  const [showFilterMenu, setFilterMenu] = useState(false);
  const onClickFilterButton = () => setFilterMenu(!showFilterMenu);

  return (
    <>
      <Div>
        <FilterBar onClickFilterButton={onClickFilterButton} />
        <NavigationContainer />
        <CreateButton />
      </Div>
      {showFilterMenu && <FilterMenuDropDown />}
    </>
  );
};

export default MenuContainer;
