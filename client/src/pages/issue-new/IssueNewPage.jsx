import React, { useContext, useEffect, useReducer } from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import { AppContext } from '../../App';
import IssueNewContent from '../../components/issue/new/IssueNewContent';
import reducer from './reducer.js';
import Sidebar from '../../components/issue/new/sidebar/Sidebar';
import ProfileImage from '../../components/common/ProfileImage';
import { getAllLabels } from '../../lib/axios/label';
import { getAllMilestones } from '../../lib/axios/milestone';
import { getAllUsers } from '../../lib/axios/user';
import { INIT_DATA } from './reducer';

const IssueNewPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  height: 500px;
  margin-top: 70px;
  margin-bottom: 40px;
  .content-wrapper {
    display: flex;
    flex-basis: 72%;
    width: 70%;
  }
`;

export const IssueOptionContext = React.createContext();

const initialState = {
  users: [],
  labels: [],
  milestones: [],
  addedAssignees: [],
  addedLabels: [],
  addedMilestone: null,
};

const IssueListNewPage = () => {
  const { currentUser } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    const [labels, milestones, users] = await Promise.all([
      getAllLabels(),
      getAllMilestones(),
      getAllUsers(),
    ]);
    dispatch({
      type: INIT_DATA,
      data: { labels, milestones, users },
    });
  }, []);

  return (
    <IssueOptionContext.Provider value={{ state, dispatch }}>
      <Header />
      <IssueNewPageWrapper>
        <div class="content-wrapper">
          <ProfileImage image={currentUser.profile_image} size={50} />
          <IssueNewContent />
        </div>
        <Sidebar />
      </IssueNewPageWrapper>
    </IssueOptionContext.Provider>
  );
};

export default IssueListNewPage;
