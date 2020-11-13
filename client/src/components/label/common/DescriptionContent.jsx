import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  flex-basis: 34%;
`;

const LabelContent = ({ description, setDescription }) => {
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <Wrapper>
      <label>Description</label>
      <input
        type="text"
        value={description}
        placeholder="Description (optional)"
        onChange={onChangeDescription}
      />
    </Wrapper>
  );
};

export default LabelContent;
