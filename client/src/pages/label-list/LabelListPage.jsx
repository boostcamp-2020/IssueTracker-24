import React, { useEffect, useReducer, useState } from 'react';
import reducer, { INIT_DATA } from './reducer';
import { getAllIssues } from '../../lib/axios/issue';
import { getAllLabels } from '../../lib/axios/label';
import Header from '../../components/Header';
import LabelListContainer from '../../components/label/LabelListContainer';
import Navigation from '../../components/label/Navigation';
import PageBody from '../../components/label/PageBody';
import LabelCreateContainer from '../../components/label/LabelCreateContainer';

export const LabelsContext = React.createContext();

const initialState = {
  issues: [],
  labels: [],
};

const LabelListPage = () => {
  const [isCreate, setCreate] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    const [issues, labels] = await Promise.all([
      getAllIssues(),
      getAllLabels(),
    ]);
    dispatch({
      type: INIT_DATA,
      data: { issues, labels },
    });
  }, []);

  return (
    <LabelsContext.Provider value={{ state, dispatch }}>
      <Header />
      <PageBody>
        <Navigation isCreate={isCreate} setCreate={setCreate} />
        {isCreate && <LabelCreateContainer setCreate={setCreate} />}
        <LabelListContainer />
      </PageBody>
    </LabelsContext.Provider>
  );
};

export default LabelListPage;
