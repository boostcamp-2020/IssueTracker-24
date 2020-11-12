import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { LabelsContext } from '../../pages/label-list/LabelListPage';
import { CHANGE_LABEL_EDIT } from '../../pages/label-list/reducer';
import SelectedLabel from '../common/SelectedLabel';
import DeleteModal from './DeleteModal';

const LabelItemWrapper = styled.div`
  display: flex;
  border: 1px solid #eaecef;
  border-top: none;
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  &:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .delete-btn {
    flex-basis: 7%;
    text-align: center;
    color: #586069;
    font-size: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const LabelTitle = styled.div`
  flex-basis: 25%;
`;
const LabelDescription = styled.div`
  flex-basis: 65%;
  color: #586069;
  font-size: 12px;
`;
const LabelEdit = styled.div`
  flex-basis: 4%;
  text-align: center;
  color: #586069;
  font-size: 12px;
`;

const LabelItem = ({ label }) => {
  const { dispatch } = useContext(LabelsContext);

  const onClickEdit = () => {
    dispatch({ type: CHANGE_LABEL_EDIT, id: label.id });
  }
  const [deleteModalDisplay, setDeleteModalDisplay] = useState(false);
  const onDeleteBtnClick = () => {
    setDeleteModalDisplay(!deleteModalDisplay);
  };

  return (
    <LabelItemWrapper>
      <LabelTitle>
        <SelectedLabel label={label} />
      </LabelTitle>
      <LabelDescription>{label.description}</LabelDescription>
      <LabelEdit onClick={onClickEdit}>Edit</LabelEdit>   
      <div className="delete-btn" onClick={onDeleteBtnClick}>
        Delete
      </div>
      {deleteModalDisplay && (
        <DeleteModal label={label} setModaldisplay={setDeleteModalDisplay} />
      )}
    </LabelItemWrapper>
  );
};

export default LabelItem;
