import React, { useState, useContext } from 'react';
import SelectedLabel from '../common/SelectedLabel';
import GreenButton from '../common/GreenButton';
import GreyButton from '../common/GreyButton';
import WriteContainer from './common/WriteContainer';
import LabelContent from './common/LabelContent';
import DescriptionContent from './common/DescriptionContent';
import ColorContent from './common/ColorContent';
import ButtonContent from './common/ButtonContent';
import { patchLabel } from '../../lib/axios/label';
import { LabelsContext } from '../../pages/label-list/LabelListPage';
import { CHANGE_LABEL_EDIT, EDIT_LABEL } from '../../pages/label-list/reducer';
import ContentWrapper from './common/ContentWrapper';

const getTitle = (title) => (title.length > 0 ? title : 'Label preview');

const LabelEditContainer = ({ label }) => {
  const { dispatch } = useContext(LabelsContext);
  const [title, setTitle] = useState(label.title);
  const [description, setDescription] = useState(label.description);
  const [color, setColor] = useState(label.color);

  const onClickCancel = (e) => {
    dispatch({ type: CHANGE_LABEL_EDIT, id: label.id });
  };
  const onClickSave = async (e) => {
    const body = { title, description, color };
    const patchedLabel = await patchLabel(label.id, body);

    dispatch({ type: EDIT_LABEL, data: { label: patchedLabel } });
  };

  const isDisabled = (title) => title.length <= 0;

  return (
    <WriteContainer edit={true}>
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
            text="Save Changes"
            func={onClickSave}
            disabled={isDisabled(title)}
          />
        </ButtonContent>
      </ContentWrapper>
    </WriteContainer>
  );
};

export default LabelEditContainer;
