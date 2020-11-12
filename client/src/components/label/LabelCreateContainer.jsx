import React, { useState } from 'react';
import styled from 'styled-components';
import WriteContainer from './common/WriteContainer';
import WriteContent from './common/WriteContent';
import SelectedLabel from '../common/SelectedLabel';

const getTitle = (title) => (title.length > 0 ? title : 'Label preview');

const LabelCreateContainer = ({ setCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#abcdef');

  const props = {
    title,
    setTitle,
    description,
    setDescription,
    color,
    setColor,
    greenBtnText: 'Create label',
  };

  return (
    <WriteContainer>
      <div>
        <SelectedLabel label={{ title: getTitle(title), color }} />
      </div>
      <WriteContent props={props} />
    </WriteContainer>
  );
};

export default LabelCreateContainer;
