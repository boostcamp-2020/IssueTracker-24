import React from 'react';
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 10px;
`;

const SmallProfileImage = ({ image }) => {
  return <ProfileImage src={image}></ProfileImage>;
};

export default SmallProfileImage;
