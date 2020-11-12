import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';
import { FILTER_ISSUES_BY_ASSIGNEE } from '../../../pages/issue-list/reducer';
import ProfileImage from '../../common/ProfileImage';
import DetailsMenuDropDown from './common/DetailsMenuDropDown';
import DetailsItem from './common/DetailsItem';

const IdWrapper = styled.div`
  margin-left: 10px;
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
      <DetailsMenuDropDown right={'-40px'}>
        <DetailsItem onClick={onClickFirstItem}>Filter by assignee</DetailsItem>
        <DetailsItem onClick={onClickNobody}>Assigned to nobody</DetailsItem>
        {users.map((user, index) => (
          <DetailsItem
            key={index}
            onClick={onClickDetailsItem}
            className={'assignee-item'}
            data={user.sns_id}
          >
            <ProfileImage image={user.profile_image} size={20} />
            <IdWrapper>{user.sns_id}</IdWrapper>
          </DetailsItem>
        ))}
      </DetailsMenuDropDown>
    </>
  );
};

export default AssigneeMenuDropDown;
