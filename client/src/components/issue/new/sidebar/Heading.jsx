import React from 'react';
import styled from 'styled-components';
import Svg from '../../../../utils/svg';

const COLORS = {
  TEXT: '#586069',
  SVG: '#959da5',
  HOVER: '#0366d6',
};

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.TEXT};
  font-size: 13px;
  cursor: pointer;
  .svg {
    fill: ${COLORS.SVG};
    padding-top: 3px;
  }
  &:hover {
    color: ${COLORS.HOVER};
  }
  &:hover .svg {
    fill: ${COLORS.HOVER};
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
