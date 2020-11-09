import React, {useContext, useEffect, useReducer} from 'react';
import Header from '../../components/Header';
import MilestoneHeader  from '../../components/milestone/MilestoneHeader'
import MilestoneNav from '../../components/milestone/MilestoneNav';
import MilestoneList from '../../components/milestone/MilestoneList';
import reducer from './reducer';
import {getAllMilestones} from '../../lib/axios/milestone';
import {INIT_DATA} from '../../pages/milestone-list/reducer';

export const MilestoneContext = React.createContext();

const initialState = {
   milestones:[],
}

const MilestonePage = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const {milestones} = state;
    useEffect(async () =>{
        const milestones = await getAllMilestones();
        console.log(milestones);
        dispatch({
            type: INIT_DATA,
            data: milestones,
        });
    },[]);
   
    return (
      <MilestoneContext.Provider value={{state, dispatch}}>
       <Header/>
       <MilestoneHeader/>
       <MilestoneNav/>
       {milestones.map((milestone, index)=>(
         <MilestoneList key={index} milestone={milestone} />)
        )}
      </MilestoneContext.Provider>
    );
}

export default MilestonePage;