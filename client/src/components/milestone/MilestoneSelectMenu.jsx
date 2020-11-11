import React, { useEffect } from 'react';
import styled from 'styled-components';
import LabelComponent from '../common/LabelComponent';
import svg from '../../utils/svg';

const MilestoneSelectMenuWrapper = styled.div`
  display: flex;
`;

const MilestoneSelectMenu = () => {
  return (
    <MilestoneSelectMenuWrapper>
      <LabelComponent svg={svg['Labels']} title="Labelssss" />
      <LabelComponent svg={svg['Milestones']} title="Milestones" />
    </MilestoneSelectMenuWrapper>
  );
};

export default MilestoneSelectMenu;
