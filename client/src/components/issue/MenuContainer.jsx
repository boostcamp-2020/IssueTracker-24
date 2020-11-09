import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import FilterBar from './filter/FilterBar';
import NavigationContainer from './NavigationContainer';
import CreateButton from './CreateButton';
import FilterMenuDropDown from './filter/FilterMenuDropDown';
import { IssuesContext } from '../../pages/issue-list/IssueListPage';
import FilterClearButton from './FilterClearButton';

export const FilterMenuContext = React.createContext();

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  margin-top: 70px;
  margin-bottom: 17px;
`;

const FilterButtonWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-bottom: 17px;
`;

const showClearButton = (searchText) =>
  searchText !== 'is:open is:issue ' ? true : false;

const MenuContainer = () => {
  const [showFilterMenu, setFilterMenu] = useState(false);
  const { state } = useContext(IssuesContext);
  const { searchText } = state;

  const onClickFilterButton = () => setFilterMenu(!showFilterMenu);

  return (
    <FilterMenuContext.Provider value={{ onClickFilterButton, setFilterMenu }}>
      <Div>
        <FilterBar
          onClickFilterButton={onClickFilterButton}
          setFilterMenu={setFilterMenu}
          searchText={searchText}
        />
        <NavigationContainer />
        <CreateButton />
      </Div>
      {showFilterMenu && <FilterMenuDropDown />}
      <FilterButtonWrapper>
        {showClearButton(searchText) && <FilterClearButton />}
      </FilterButtonWrapper>
    </FilterMenuContext.Provider>
  );
};

export default MenuContainer;
