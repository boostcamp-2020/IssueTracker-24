import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import SelectedLabel from '../../components/common/SelectedLabel';
import GreyButton from '../../components/common/GreyButton';
import { deleteLabel } from '../../lib/axios/label';
import { LabelsContext } from '../../pages/label-list/LabelListPage';
import { REMOVE_LABEL } from '../../pages/label-list/reducer';

const DeleteModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  .delete-modal {
    position: fixed;
    padding: 0 20px;
    background: white;
    width: 50%;
    height: 135px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #586069;
    border-radius: 7px;
    .warning-msg {
      color: #5f6368;
      font-weight: bold;
      font-size: 15px;
    }
  }
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
`;

const LabelDesription = styled.div`
  font-size: 13px;
  color: #586069;
  height: 20px;
  line-height: 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const DeleteButton = styled.div`
  background-color: #ee6c6c;
  border: 1.5px solid #eaecef;
  border-radius: 4px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  outline: 0;
  font-weight: bold;
  padding: 0px 15px 0px 15px;
  cursor: pointer;
  color: white;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const DeleteModal = ({ label, setModaldisplay }) => {
  const ref = useRef();
  const { dispatch } = useContext(LabelsContext);

  useEffect(() => {
    const clickMargin = (e) => {
      if (ref.current && ref.current.contains(e.target)) return;
      setModaldisplay(false);
    };
    document.body.addEventListener('click', clickMargin);

    return () => {
      document.body.removeEventListener('click', clickMargin);
    };
  }, []);

  const onDeleteBtnClick = () => {
    deleteLabel(label.id);
    setModaldisplay(false);
    dispatch({ type: REMOVE_LABEL, id: label.id });
  };

  const onCancelBtnClick = () => {
    setModaldisplay(false);
  };

  return (
    <DeleteModalWrapper>
      <div ref={ref} className="delete-modal">
        <div className="warning-msg">
          Are you sure? Deleting a label will remove it from all issues and pull
          requests.
        </div>
        <ModalContent>
          <SelectedLabel label={label} />
          <LabelDesription>{label.description}</LabelDesription>
        </ModalContent>
        <ButtonWrapper>
          <DeleteButton>
            <div onClick={onDeleteBtnClick}>Delete</div>
          </DeleteButton>
          <GreyButton text="Cancel" func={onCancelBtnClick} />
        </ButtonWrapper>
      </div>
    </DeleteModalWrapper>
  );
};

export default DeleteModal;
