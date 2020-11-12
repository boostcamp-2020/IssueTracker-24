import React, { useState, useContext } from 'react';
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
import ContentWrapper from './common/ContentWrapper';

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
    <WriteContainer edit={false}>
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
