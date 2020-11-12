import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';
import { FILTER_ISSUES_BY_ASSIGNEE } from '../../../pages/issue-list/reducer';
import ProfileImage from '../../common/ProfileImage';

const DetailsItem = styled.div`
  display: flex;
  border-bottom: 1px solid #eaecef;
  height: 32px;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 20px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
  &:nth-child(1) {
    font-weight: 600;
    background-color: #fafbfc;
    cursor: auto;
    &:hover {
      background-color: #fafbfc;
    }
  }
  .user-id {
    margin-left: 10px;
  }
`;

const DetailsMenuDropDown = styled.div`
  width: 250px;
  position: absolute;
  top: 70px;
  right: -40px;
  z-index: 10;
  border: 1px solid #eaecef;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
`;

const AssigneeMenuDropDown = ({ setShowAssigneeMenu }) => {
  const { state, dispatch } = useContext(IssuesContext);
  const { users } = state;

  const onClickFirstItem = (e) => {
    e.stopPropagation();
  };

  const onClickNobody = (e) => {
    dispatch({
      type: FILTER_ISSUES_BY_ASSIGNEE,
    });
    setShowAssigneeMenu();
    e.stopPropagation();
  };

  const onClickDetailsItem = (e) => {
    const detailsItem = e.target.closest('.assignee-item');
    dispatch({
      type: FILTER_ISSUES_BY_ASSIGNEE,
      assignee: detailsItem.dataset.name,
    });
    setShowAssigneeMenu();
    e.stopPropagation();
  };

  return (
    <>
      <DetailsMenuDropDown>
        <DetailsItem onClick={onClickFirstItem}>Filter by assignee</DetailsItem>
        <DetailsItem onClick={onClickNobody}>Assigned to nobody</DetailsItem>
        {users.map((user, index) => (
          <DetailsItem
            key={index}
            onClick={onClickDetailsItem}
            className={'assignee-item'}
            data-name={user.sns_id}
          >
            <ProfileImage image={user.profile_image} size={20} />
            <div className="user-id">{user.sns_id}</div>
          </DetailsItem>
        ))}
      </DetailsMenuDropDown>
    </>
  );
};

export default AssigneeMenuDropDown;
