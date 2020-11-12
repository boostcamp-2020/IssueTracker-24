import React, { useContext } from 'react';
import { LabelsContext } from '../../pages/label-list/LabelListPage';
import LabelItem from './LabelItem';
import styled from 'styled-components';

const LabelListContainerWrapper = styled.div``;
const LabelListHeader = styled.div`
  font-color: #f6f8fa;
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  background-color: #f6f8fa;
  border: 1px solid #eaecef;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
`;

const LabelListContainer = () => {
  const { state } = useContext(LabelsContext);
  const renderedLabelList = state.labels.map((label, index) => {
    return <LabelItem key={'label' + index} label={label} />;
  });

  return (
    <LabelListContainerWrapper>
      <LabelListHeader>{state.labels.length} labels</LabelListHeader>
      {renderedLabelList}
    </LabelListContainerWrapper>
  );
};
export default LabelListContainer;
