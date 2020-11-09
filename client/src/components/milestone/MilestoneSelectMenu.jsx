import React from 'react';
import styled from 'styled-components';
import LabelComponent from '../common/LabelComponent';
import svg from '../../utils/svg';


const MilestoneSelectMenuWrapper = styled.div`
display:flex;
margin-top:
`;

const MilestoneSelectMenu = () =>{
    return (
        <MilestoneSelectMenuWrapper>
           <LabelComponent svg={svg['Labels']} title='Labels'/>
           <LabelComponent svg={svg['Milestones']} title='Milestones'/>
        </MilestoneSelectMenuWrapper>
    )
}

export default MilestoneSelectMenu;