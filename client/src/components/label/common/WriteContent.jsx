import React from 'react';
import styled from 'styled-components';
import GreenButton from '../../common/GreenButton';
import GreyButton from '../../common/GreyButton';
import svg from '../../../utils/svg';
import { getContrastYIQ, getRandomColor } from '../../../utils/color';

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

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  flex-basis: 19%;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  flex-basis: 34%;
`;
const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  flex-basis: 9%;
  div {
    display: flex;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 0px;
  flex-basis: 34%;
  button {
    height: 35px;
    margin-left: 10px;
  }
`;

const ColorButton = styled.button`
  height: 27px;
  margin-right: 10px;
  padding-top: 3px;
  border: 0;
  outline: 0;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  svg {
    fill: ${(props) => getContrastYIQ(props.color)};
  }
  &: hover {
    cursor: pointer;
  }
`;

const WriteContent = ({ props }) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    color,
    setColor,
    greenBtnText,
  } = props;

  const onChangeLabel = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const onClickColor = (e) => {
    setColor(getRandomColor());
  };

  return (
    <ContentWrapper>
      <LabelWrapper>
        <label>Label name</label>
        <input
          type="text"
          value={title}
          placeholder="Label name"
          onChange={onChangeLabel}
        ></input>
      </LabelWrapper>

      <DescriptionWrapper>
        <label>Description</label>
        <input
          type="text"
          value={description}
          placeholder="Description (optional)"
          onChange={onChangeDescription}
        ></input>
      </DescriptionWrapper>

      <ColorWrapper>
        <label>Color</label>
        <div>
          <ColorButton color={color} onClick={onClickColor}>
            {svg['changeColor']}
          </ColorButton>
          <input type="text" value={color} onChange={onChangeColor}></input>
        </div>
      </ColorWrapper>

      <ButtonWrapper>
        <GreyButton text="Cancel" />
        <GreenButton text={greenBtnText} />
      </ButtonWrapper>
    </ContentWrapper>
  );
};

export default WriteContent;
