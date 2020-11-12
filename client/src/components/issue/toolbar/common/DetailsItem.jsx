import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #eaecef;
  min-height: 32px;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 20px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
  &:nth-child(1) {
    font-weight: 600;
    background-color: #fafbfc;
    cursor: auto;
    &:hover {
      background-color: #fafbfc;
    }
  }
`;

const DetailsItem = ({ onClick, className, data, children }) => {
  return (
    <Wrapper onClick={onClick} className={className} data-name={data}>
      {children}
    </Wrapper>
  );
};

export default DetailsItem;
