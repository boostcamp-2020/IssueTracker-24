import React, {useState} from 'react';
import styled from 'styled-components';

const IssueNewTitleWrapper = styled.input.attrs({
      type:'text'
})`
  width:85%;
  height:30px;
  border:1px solid #E8EAED;
  margin:20px 20px;
  background-color:#FAFBFC;
  font-weight:bold;
  color:#D7DADD;
  padding:0 20px;
`;

const IssueNewTitle = () =>{
    const [title, setTitle] = useState('Title');
    const onChangeTitle = (e) =>{
        setTitle(e.target.value);
    }
    return (
    <>
      <IssueNewTitleWrapper onChange={onChangeTitle} value={title}>
      </IssueNewTitleWrapper>
    </>
    );
}
export default IssueNewTitle;