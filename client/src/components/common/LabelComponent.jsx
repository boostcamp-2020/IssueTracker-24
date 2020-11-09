import React from 'react';
import styled from 'styled-components';
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
    return (
      <>
        <LabelComponentWrapper title={title}>
            {svg}
            {title}
        </LabelComponentWrapper>
      </>
    );
}

export default LabelComponent;