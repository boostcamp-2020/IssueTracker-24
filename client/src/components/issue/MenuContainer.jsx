import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import FilterBar from './filter/FilterBar';
import NavigationContainer from './NavigationContainer';
import GreenButton from '../common/GreenButton';
import FilterMenuDropDown from './filter/FilterMenuDropDown';
import { IssuesContext } from '../../pages/issue-list/IssueListPage';
import { useHistory } from 'react-router-dom';
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

const showClearButton = (searchText) => searchText !== 'is:open is:issue ';

const MenuContainer = () => {
  const [showFilterMenu, setFilterMenu] = useState(false);
  const { state } = useContext(IssuesContext);
  const { searchText } = state;
  const history = useHistory();

  const onClickFilterButton = () => setFilterMenu(!showFilterMenu);
  const onClickNewIssue = (e) => {
    history.push('/issues/new');
    e.stopPropagation();
  };

  return (
    <FilterMenuContext.Provider value={{ onClickFilterButton, setFilterMenu }}>
      <Div>
        <FilterBar
          onClickFilterButton={onClickFilterButton}
          setFilterMenu={setFilterMenu}
          showFilterMenu={showFilterMenu}
        />
        <NavigationContainer />
        <GreenButton text={'New issue'} func={onClickNewIssue} />
      </Div>
      {showFilterMenu && <FilterMenuDropDown />}
      <FilterButtonWrapper>
        {showClearButton(searchText) && <FilterClearButton />}
      </FilterButtonWrapper>
    </FilterMenuContext.Provider>
  );
};

export default MenuContainer;
