import React from 'react';
import styled from 'styled-components';
import Svg from '../../../../utils/svg';

const COLORS = {
  text: '#586069',
  svg: '#959da5',
  hover: '#0366d6',
};

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.text};
  font-size: 13px;
  cursor: pointer;
  .svg {
    fill: ${COLORS.svg};
    padding-top: 3px;
  }
  &:hover {
    color: ${COLORS.hover};
  }
  &:hover .svg {
    fill: ${COLORS.hover};
  }
`;

const Heading = ({ title, onClick }) => {
  return (
    <HeadingWrapper onClick={onClick}>
      <div>{title}</div>
      <div className="svg">{Svg.SidebarIcon}</div>
    </HeadingWrapper>
  );
};

export default Heading;
