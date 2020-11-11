import React from 'react';
import styled from 'styled-components'; 
import SmallLabel from '../SmallLabel';
const LabelWrapper = styled.div`

`;
const LabelOptionContent = styled.div`
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const LabelOptionTitle = styled.div``;
const LabelOptionDescription = styled.div``;
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