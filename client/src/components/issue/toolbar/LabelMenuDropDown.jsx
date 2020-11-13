import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';
import SmallLabel from '../../common/SmallLabel';
import { FILTER_ISSUES_BY_LABEL } from '../../../pages/issue-list/reducer';
import DetailsMenuDropDown from './common/DetailsMenuDropDown';
import DetailsItem from './common/DetailsItem';

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .description {
    width: 185px;
    color: grey;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 20px;
  }
`;

const LabelMenuDropDown = ({ setShowLabelMenu }) => {
  const { state, dispatch } = useContext(IssuesContext);
  const { labels } = state;

  const onClickFirstItem = (e) => {
    e.stopPropagation();
  };

  const onClickUnlabel = (e) => {
    dispatch({
      type: FILTER_ISSUES_BY_LABEL,
    });
    setShowLabelMenu();
    e.stopPropagation();
  };

  const onClickDetailsItem = (e) => {
    const detailsItem = e.target.closest('.label-item');
    dispatch({
      type: FILTER_ISSUES_BY_LABEL,
      label: detailsItem.dataset.name,
    });
    setShowLabelMenu();
    e.stopPropagation();
  };

  return (
    <>
      <DetailsMenuDropDown left={'20px'}>
        <DetailsItem onClick={onClickFirstItem}>Filter by label</DetailsItem>
        <DetailsItem onClick={onClickUnlabel}>Unlabeled</DetailsItem>
        {labels.map((label, index) => (
          <DetailsItem
            key={index}
            onClick={onClickDetailsItem}
            className={'label-item'}
            data={label.title}
          >
            <SmallLabel color={label.color} size={14}/>
            <LabelWrapper>
              <div>{label.title}</div>
              <div className="description">{label.description}</div>
            </LabelWrapper>
          </DetailsItem>
        ))}
      </DetailsMenuDropDown>
    </>
  );
};

export default LabelMenuDropDown;
