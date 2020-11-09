import React, {useContext, useEffect, useReducer} from 'react';
import Header from '../../components/Header';
import MilestoneHeader  from '../../components/milestone/MilestoneHeader'

const MilestonePage = () =>{
    return (
      <>
       <Header/>
       <MilestoneHeader/>
       <MilestoneNav/>
      </>
    );
}

export default MilestonePage;