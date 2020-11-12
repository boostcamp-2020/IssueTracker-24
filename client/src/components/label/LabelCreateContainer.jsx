import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SelectedLabel from '../common/SelectedLabel';
import GreenButton from '../common/GreenButton';
import GreyButton from '../common/GreyButton';
import { getRandomColor } from '../../utils/color';
import WriteContainer from './common/WriteContainer';
import LabelContent from './common/LabelContent';
import DescriptionContent from './common/DescriptionContent';
import ColorContent from './common/ColorContent';
import ButtonContent from './common/ButtonContent';
import { getAllLabels, createLabel } from '../../lib/axios/label';
import { LabelsContext } from '../../pages/label-list/LabelListPage';
import { RENEW_LABEL } from '../../pages/label-list/reducer';

const ContentWrapper = styled.div`
  display: flex;
  font-size: 14px;
  margin: 25px 0 15px 0;

  label {
    font-weight: 600;
    margin-bottom: 7px;
    color: #24292e;
  }

  input {
    height: 25px;
    padding: 2px 5px;
    outline: 0;
    border: 1px solid #e1e4e8;
    border-radius: 5px;
    &:focus {
      border: 0.5px solid #0366d6;
      box-shadow: 0px 0px 2.5px 2.5px #b3d1f3;
    }
  }
`;

const getTitle = (title) => (title.length > 0 ? title : 'Label preview');

const LabelCreateContainer = ({ setCreate }) => {
  const { dispatch } = useContext(LabelsContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState(getRandomColor());

  const onClickCancel = (e) => setCreate(false);
  const onClickCreate = async (e) => {
    const body = { title, description, color };
    const label = await createLabel(body);
    const labels = await getAllLabels();

    dispatch({ type: RENEW_LABEL, data: { labels } });
    setCreate(false);
  };
  const isDisabled = (title) => title.length <= 0;

  return (
    <WriteContainer>
      <div>
        <SelectedLabel label={{ title: getTitle(title), color }} />
      </div>
      <ContentWrapper>
        <LabelContent title={title} setTitle={setTitle} />

        <DescriptionContent
          description={description}
          setDescription={setDescription}
        />

        <ColorContent color={color} setColor={setColor} />

        <ButtonContent>
          <GreyButton text="Cancel" func={onClickCancel} />
          <GreenButton
            text="Create label"
            func={onClickCreate}
            disabled={isDisabled(title)}
          />
        </ButtonContent>
      </ContentWrapper>
    </WriteContainer>
  );
};

export default LabelCreateContainer;
