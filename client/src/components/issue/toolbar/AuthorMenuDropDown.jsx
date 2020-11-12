import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';
import ProfileImage from '../../common/ProfileImage';
import { FILTER_ISSUES_BY_AUTHOR } from '../../../pages/issue-list/reducer';
import DetailsMenuDropDown from './common/DetailsMenuDropDown';
import DetailsItem from './common/DetailsItem';

const IdWrapper = styled.div`
  margin-left: 10px;
`;

const AuthorMenuDropDown = ({ setShowAuthorMenu }) => {
  const { state, dispatch } = useContext(IssuesContext);
  const { users } = state;

  const onClickFirstItem = (e) => {
    e.stopPropagation();
  };

  const onClickDetailsItem = (e) => {
    const detailsItem = e.target.closest('.author-item');
    dispatch({
      type: FILTER_ISSUES_BY_AUTHOR,
      author: detailsItem.dataset.name,
    });
    setShowAuthorMenu(false);
    e.stopPropagation();
  };

  return (
    <>
      <DetailsMenuDropDown left={'-70px'}>
        <DetailsItem onClick={onClickFirstItem}>Filter by author</DetailsItem>
        {users.map((user, index) => (
          <DetailsItem
            className={'author-item'}
            key={index}
            onClick={onClickDetailsItem}
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

export default AuthorMenuDropDown;
