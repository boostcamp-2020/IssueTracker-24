import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 250px;
  position: absolute;
  top: 70px;
  z-index: 10;
  border: 1px solid #eaecef;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
`;

const DetailsMenuDropDown = ({ left, right, children }) => {
  return (
    <Wrapper left={left} right={right}>
      {children}
    </Wrapper>
  );
};

export default DetailsMenuDropDown;
