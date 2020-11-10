import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MilestoneEditForm from '../components/milestone/MilestoneEditForm';
import LabelComponent from '../components/common/LabelComponent';
import svg from '../utils/svg';
import Header from '../components/Header';

const MilestoneNewPageWrappper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
`;

const SelectMenuWrapper = styled.div`
  display: flex;
  height: 40px;
  border-bottom: 1px solid black;
  margin-top: 15px;
  margin-bottom: 13px;
  padding-bottom: 10px;
`;

const MilestoneEditPage = ({ match }) => {
  const history = useHistory();
  const onClickMilestoneMenu = () => history.push('/milestones');
  const onClickLabelMenu = () => history.push('/labels');

  return (
    <>
      <Header />
      <MilestoneNewPageWrappper>
        <SelectMenuWrapper>
          <LabelComponent
            svg={svg['Labels']}
            title="Labels"
            func={onClickLabelMenu}
          />
          <LabelComponent
            svg={svg['Milestones']}
            title="Milestones"
            func={onClickMilestoneMenu}
          />
        </SelectMenuWrapper>
        <MilestoneEditForm milestoneId={match.params.id} />
      </MilestoneNewPageWrappper>
    </>
  );
};

export default MilestoneEditPage;
