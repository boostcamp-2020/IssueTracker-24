import React from 'react';
import styled from 'styled-components'; 
import SmallLabel from '../SmallLabel';
const LabelWrapper = styled.div`
  border-bottom: 1px solid #eaecef;
  cursor:pointer;
  &:hover{
    background-color:#0366D6;
    color:#fff;
 }
`;
const LabelOptionContent = styled.div`
  flex-basis: 80%;
  display: flex;
  justify-content:center;
  width: 100%;
`;
const LabelOptionTitle = styled.div``;
const LabelOptionDescription = styled.div`
  display:flex;
  justify-content:center;

`;
const Label = ({color, title, description}) =>{
  return (
        <LabelWrapper>
          <LabelOptionContent>
             <SmallLabel color={color} size={14} marginTop={2} ></SmallLabel>
             <LabelOptionTitle>{title}</LabelOptionTitle>
          </LabelOptionContent> 
          <LabelOptionDescription>{description}</LabelOptionDescription>
        </LabelWrapper>
  );
}
export default Label;