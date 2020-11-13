import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../../common/ProfileImage';
import svg from '../../../../utils/svg.js';

const UserOptionWrapper = styled.div`
  color: #586069;
  font-size: ${(props) => props.fontSize}px;
  padding: ${(props) => props.padding}px;
  cursor: pointer;
  &:hover {
    background-color: #0366d6;
    color: white;
    .image {
      border-color: white;
    }
  }
`;
const UserOptionContent = styled.div`
  display: flex;
  flex-direction: row;
`;
const SvgWrapper = styled.div`
  margin-right: 3px;
  &.display-visible {
    visibility: visible;
  }
  &.display-hidden {
    visibility: hidden;
  }
`;
const UserOptionId = styled.div`
  margin-left: 5px;
`;

const UserOption = ({
  option,
  add,
  remove,
  isAdded,
  fontSize = 16,
  padding = 2,
  size = 15,
}) => {
  const checkDisplay = isAdded ? 'display-visible' : 'display-hidden';
  const isSelectable = add && remove ? true : false;

  const handleOnClick = () => {
    if (!add || !remove) return;
    if (isAdded) remove(option);
    else add(option);
  };

  return (
    <UserOptionWrapper
      onClick={handleOnClick}
      fontSize={fontSize}
      padding={padding}
    >
      <UserOptionContent>
        {isSelectable ? (
          <SvgWrapper className={checkDisplay}>{svg.checkIcon}</SvgWrapper>
        ) : null}
        <div>
          <ProfileImage image={option.profile_image} size={size} />
        </div>
        <UserOptionId>{option.sns_id}</UserOptionId>
      </UserOptionContent>
    </UserOptionWrapper>
  );
};

export default UserOption;
