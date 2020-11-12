import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  flex-basis: 19%;
`;

const LabelContent = ({ title, setTitle }) => {
  const onChangeLabel = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Wrapper>
      <label>Label name</label>
      <input
        type="text"
        value={title}
        placeholder="Label name"
        onChange={onChangeLabel}
      />
    </Wrapper>
  );
};

export default LabelContent;
