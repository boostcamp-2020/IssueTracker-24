import React, {useContext, useEffect, useReducer} from 'react';
import Header from '../../components/Header';
import MilestoneHeader  from '../../components/milestone/MilestoneHeader'
import MilestoneNav from '../../components/milestone/MilestoneNav';
import MilestoneList from '../../components/milestone/MilestoneList';

const MilestonePage = () =>{
    return (
      <>
       <Header/>
       <MilestoneHeader/>
       <MilestoneNav/>
       <MilestoneList/>
      </>
    );
}

export default MilestonePage;