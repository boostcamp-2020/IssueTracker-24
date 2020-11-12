import React from 'react';
import styled from 'styled-components';
import { getContrastYIQ, getRandomColor } from '../../../utils/color';
import svg from '../../../utils/svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  flex-basis: 9%;
  div {
    display: flex;
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

const ColorContent = ({ color, setColor }) => {
  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const onClickColor = (e) => {
    setColor(getRandomColor());
  };

  return (
    <Wrapper>
      <label>Color</label>
      <div>
        <ColorButton color={color} onClick={onClickColor}>
          {svg['changeColor']}
        </ColorButton>
        <input type="text" value={color} onChange={onChangeColor}></input>
      </div>
    </Wrapper>
  );
};

export default ColorContent;
