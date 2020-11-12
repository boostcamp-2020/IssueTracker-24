import React, { useContext, useEffect, useReducer } from 'react';
import Header from '../../components/Header';
import MilestoneHeader from '../../components/milestone/MilestoneHeader';
import MilestoneNav from '../../components/milestone/MilestoneNav';
import MilestoneList from '../../components/milestone/MilestoneList';
import MilestoneModal from '../../components/milestone/MilestoneModal';
import reducer from './reducer';
import { getAllMilestones } from '../../lib/axios/milestone';
import { getAllIssues } from '../../lib/axios/issue';
import { INIT_DATA } from './reducer';

export const MilestoneContext = React.createContext();

const initialState = {
  milestones: [],
  labelColor: '#fff',
  labelFontColor: '#242424',
  openclosedState: 'open',
  milestoneList: [],
  issues: [],
  display: 'none',
};

const MilestonePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { milestones } = state;
  useEffect(async () => {
    const milestones = await getAllMilestones();
    const issues = await getAllIssues();
    dispatch({
      type: INIT_DATA,
      milestones: milestones,
      milestoneList: milestones.filter(
        (milestone) => milestone.state === 'open',
      ),
      issues: issues,
      display: 'none',
    });
  }, []);

  return (
    <MilestoneContext.Provider value={{ state, dispatch }}>
      <Header />
      <MilestoneHeader />
      <MilestoneNav milestones={milestones} />
      {state.milestoneList.map((milestone, index) => (
        <MilestoneList
          key={index}
          milestone={milestone}
          milestoneTitle={milestone.title}
        />
      ))}
      <MilestoneModal
        display={state.display}
        milestoneId={state.milestoneId}
      ></MilestoneModal>
    </MilestoneContext.Provider>
  );
};

export default MilestonePage;
