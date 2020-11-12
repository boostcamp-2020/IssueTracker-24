import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  overflow-y: ${(props) => props.overflow};
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
  const [overflow, setOverflow] = useState('auto');
  const wrapperRef = useRef();
  useEffect(() => {
    if (wrapperRef.current.clientHeight > 300) {
      wrapperRef.current.style.height = '300px';
      setOverflow('scroll');
    }
  }, []);
  return (
    <Wrapper ref={wrapperRef} left={left} right={right} overflow={overflow}>
      {children}
    </Wrapper>
  );
};

export default DetailsMenuDropDown;
