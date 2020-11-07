import React, { useState } from 'react';
import styled from 'styled-components';

const DropDownWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

const DropDownIcon = () => {
  return (
    <DropDownWrapper className="material-icons">
      arrow_drop_down
    </DropDownWrapper>
  );
};

export default DropDownIcon;
