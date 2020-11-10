import React, {useContext} from 'react';
import styled from 'styled-components';
import {MilestoneContext} from '../../pages/milestone-list/MilestonePage';
import {ROUTING_LABEL} from '../../pages/milestone-list/reducer';
const LabelComponentWrapper = styled.div`
   width:${(props)=>(props.title === "Labels"? "100px":"130px")};
   height:30px;
   background-color:#fff;
   border:1px solid #E1E4E8;
   cursor:pointer;
   font-weight:bold;
   box-sizing:border-box;
   padding:5px 15px;
   border-top-left-radius:${(props)=>(props.title === "Labels"? "5px":"0px")};
   border-bottom-left-radius:${(props)=>(props.title === "Labels"? "5px":"0px")};
   border-top-right-radius:${(props)=>(props.title === "Milestones"? "5px":"0px")};
   border-bottom-right-radius:${(props)=>(props.title === "Milestones"? "5px":"0px")};
`;

const LabelComponent = ({svg, title}) =>{
   const {state, dispatch} = useContext(MilestoneContext);
   const onClickHandler = (e) =>{
        let color = state.labelColor ==='#fff'?'#1066D6':'#fff';
        let fontColor = state.labelFontColor ==='#242424'?'#fff':'#242424';
        dispatch({
          type:ROUTING_LABEL,
          labelColor:color,
          labelFontColor:fontColor
        })
        e.target.style.backgroundColor=state.labelColor;
        e.target.style.color=state.labelFontColor;
      }
    return (
      <>
        <LabelComponentWrapper title={title}  onClick={onClickHandler}>
            {svg}
            {title}
        </LabelComponentWrapper>
      </>
    );
}

export default LabelComponent;