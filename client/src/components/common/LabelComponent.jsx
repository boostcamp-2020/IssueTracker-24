import React, {useContext} from 'react';
import styled from 'styled-components';
import {MilestoneContext} from '../../pages/milestone-list/MilestonePage';
import {ROUTING_LABEL} from '../../pages/milestone-list/reducer';
const LabelComponentWrapper = styled.div`
  width: ${(props) => (props.title === 'Labels' ? '100px' : '140px')};
  height: 30px;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  cursor: pointer;
  font-weight: bold;
  box-sizing: border-box;
  padding: 5px 15px;
  border-top-left-radius: ${(props) =>
    props.title === 'Labels' ? '5px' : '0px'};
  border-bottom-left-radius: ${(props) =>
    props.title === 'Labels' ? '5px' : '0px'};
  border-top-right-radius: ${(props) =>
    props.title === 'Milestones' ? '5px' : '0px'};
  border-bottom-right-radius: ${(props) =>
    props.title === 'Milestones' ? '5px' : '0px'};
`;

const LabelComponent = ({ svg, title, func }) => {
  return (
    <>
      <LabelComponentWrapper title={title} onClick={func}>
        {svg}
        {title}
      </LabelComponentWrapper>
    </>
  );
};


export default LabelComponent;
