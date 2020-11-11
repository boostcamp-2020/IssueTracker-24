import React, {useContext, useEffect}from 'react';
import {MilestoneContext} from '../../pages/milestone-list/MilestonePage';
import styled from 'styled-components';
import {DELETE_MILESTONE} from '../../pages/milestone-list/reducer';

const MilestoneModalWrapper=styled.div`
  display:${(props)=>props.display};
  position:fixed;
  width:100%;
  height:100%;
  left:0;
  top:0;
  background-color:rgba(10,10,10,0.1);
`;
const MilestoneModalContent =styled.div`
  background-color: #F6F8FA;
  display: block;
  justify-content: space-between;
  margin: 15% auto; /* 15% from the top and centered */
  
  border: 1px solid #888; 
  width: 30%; /* Could be more or less, depending on screen size */
  border-radius:5px; 
`;
const MilestoneModalTitle = styled.div`
  font-weight:bold;
  padding: 20px;
`;
const MilestoneModalClose = styled.button`
 float:right;
 border:0;
 background:#F6F8FA;
 outline:0;
 &:hover{
     cursor:pointer;
     color:#0366D6;
 }
`;
const MilestoneModalNav = styled.div`
   background-color:#FFFBDD;
   width:100%;
   height:70px;
   padding-left:20px;
   padding-top:30px;
   box-sizing:border-box;
   border:2px soild #EFE4B1;
`;
const MilestoneModalSection = styled.div`
   background-color:#fff;
   width:100%;
   height:200px;

`;
const MilestonModalParagraph = styled.p`
 box-sizing:border-box;
 padding-left:20px;
 padding-top:10px;
`;
const MilestoneModalFooter = styled.div`
  border-top:1px solid #E1E4E8;
  width:98%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:5px;
`;
const MilestoneDeleteButton = styled.button`

    width:94%;
    height:30px;
    background-color:#FAFBFC;
    color: #D73A49;
    margin:6px auto;
    border:1px solid #E1E4E8;
    font-size:15px;
    border-radius:5px;
    cursor:pointer;
    &:hover{
        background:#DC3535;
        color:#fff;
        transition:0.2s;
    }
`;
const MilestoneModal = ({display, milestoneId}) =>{
    const {state, dispatch} = useContext(MilestoneContext);
    const closeHandler = () =>{
       let display = state.display==='block'?'none':'block';
       display = state.display==='none'?'block':'none';
       dispatch({type:DELETE_MILESTONE, display:display});
    }
    const deleteHandler = () =>{
       console.log(milestoneId);
    }
    return(
      <MilestoneModalWrapper display={display}>
         <MilestoneModalContent>
            <MilestoneModalTitle>
               Are you sure?
               <MilestoneModalClose onClick={closeHandler}>
                &times;
               </MilestoneModalClose>
            </MilestoneModalTitle>
            <MilestoneModalNav>
              Deletions are final!
             </MilestoneModalNav>
             <MilestoneModalSection>
            <MilestonModalParagraph>
            Once you delete this milestone you will not be able to see it again. If you would like to close the milestone, remove any issues from the milestone and it will automatically close.
            </MilestonModalParagraph>
            <MilestonModalParagraph>Deleting this milestone will not delete or close the associated issues.</MilestonModalParagraph>
            <MilestoneModalFooter>
                 <MilestoneDeleteButton onClick={deleteHandler}>Delete this milestone</MilestoneDeleteButton>
            </MilestoneModalFooter>
             </MilestoneModalSection>
         </MilestoneModalContent>
      </MilestoneModalWrapper>
    );
}
export default MilestoneModal;