import React, { useEffect, useReducer, useState, useContext } from 'react';
import IssueContainer from '../../components/issue/IssueContainer';
import Header from '../../components/Header';
import reducer from './reducer';
import MenuContainer from '../../components/issue/MenuContainer';
import { getAllIssues } from '../../lib/axios/issue';
import { getAllLabels } from '../../lib/axios/label';
import { getAllMilestones } from '../../lib/axios/milestone';
import { getAllUsers } from '../../lib/axios/user';
import { INIT_DATA } from '../../pages/issue-list/reducer';
import ToolBarContainer from '../../components/issue/ToolBarContainer';
import Spinner from '../../components/common/Spinner';
import { AppContext } from '../../App';

export const IssuesContext = React.createContext();

const initialState = {
  currentUser: '',
  wholeCheck: false,
  searchText: 'is:open is:issue ',
  renderedIssues: [],
  issues: [],
  labels: [],
  milestones: [],
  users: [],
};

const IssueListPage = () => {
  const { currentUser } = useContext(AppContext);
  initialState.currentUser = currentUser;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCompleteRequest, setIsCompleteRequest] = useState(false);

  useEffect(async () => {
    const [issues, labels, milestones, users] = await Promise.all([
      getAllIssues(),
      getAllLabels(),
      getAllMilestones(),
      getAllUsers(),
    ]);
    setIsCompleteRequest(true);
    dispatch({
      type: INIT_DATA,
      data: { issues, labels, milestones, users },
    });
  }, []);

  if (!isCompleteRequest) return <Spinner />;

  return (
    <IssuesContext.Provider value={{ state, dispatch }}>
      <Header />
      <MenuContainer />
      <ToolBarContainer />
      <IssueContainer />
    </IssuesContext.Provider>
  );
};

export default IssueListPage;
