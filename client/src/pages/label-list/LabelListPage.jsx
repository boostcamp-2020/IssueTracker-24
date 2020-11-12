import React, { useEffect, useReducer, useState } from 'react';
import reducer, { INIT_DATA } from './reducer';
import { getAllIssues } from '../../lib/axios/issue';
import { getAllLabels } from '../../lib/axios/label';
import Header from '../../components/Header';
import LabelListContainer from '../../components/label/LabelListContainer';
import Navigation from '../../components/common/Navigation';
import GreenButton from '../../components/common/GreenButton';
import PageBody from '../../components/label/PageBody';
import LabelCreateContainer from '../../components/label/LabelCreateContainer';
import styled from 'styled-components';
import Spinner from '../../components/common/Spinner';

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const LabelsContext = React.createContext();

const initialState = {
  issues: [],
  labels: [],
};

const LabelListPage = () => {
  const [isCompleteRequest, setIsCompleteRequest] = useState(false);
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
    setIsCompleteRequest(true);
  }, []);

  const onClickCreate = () => setCreate(!isCreate);

  if (!isCompleteRequest) return <Spinner />;

  return (
    <LabelsContext.Provider value={{ state, dispatch }}>
      <Header />
      <PageBody>
        <NavigationWrapper>
          <Navigation cur={'labels'} />
          <GreenButton text={'New label'} func={onClickCreate} />
        </NavigationWrapper>
        {isCreate && <LabelCreateContainer setCreate={setCreate} />}
        <LabelListContainer />
      </PageBody>
    </LabelsContext.Provider>
  );
};

export default LabelListPage;
