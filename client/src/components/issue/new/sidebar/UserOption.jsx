import React from 'react';
import styled from 'styled-components';

const UserOptionWrapper = styled.div`
  color: #586069;
  font-size: 12px;
  padding: 5px 0px 5px 15px;
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
const UserOptionContentImage = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-right: 10px;
`;

const UserOption = ({ data }) => {
  return (
    <UserOptionWrapper>
      <UserOptionContent>
        <UserOptionContentImage></UserOptionContentImage>
        <div className="user-id">{data.sns_id}</div>
      </UserOptionContent>
    </UserOptionWrapper>
  );
};

export default UserOption;
