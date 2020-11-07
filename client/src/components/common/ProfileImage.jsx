import React, { useContext } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: ${(props) => `${props.size / 2}px`};
`;

const ProfileImage = ({ image, size }) => {
  return <Image src={image} size={size}></Image>;
};

export default ProfileImage;
