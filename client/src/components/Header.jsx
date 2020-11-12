import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import svg from '../utils/svg';

const IssueHeaderWrapper = styled.div`
  width: 100%;
  height: 55px;
  background-color: #24292f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  svg {
    padding-top: 8px;
  }
`;

const HeaderText = styled.span`
  cursor: pointer;
`;
const IssueHeader = ({ text }) => {
  const history = useHistory();
  const onClickHeader = () => history.push('/issues');

  return useMemo(
    () => (
      <>
        <IssueHeaderWrapper>
          {svg['homeLogo']}
          <HeaderText onClick={onClickHeader}>
            {text ? text : 'ISSUES'}
          </HeaderText>
        </IssueHeaderWrapper>
      </>
    ),
    [],
  );
};

export default IssueHeader;
