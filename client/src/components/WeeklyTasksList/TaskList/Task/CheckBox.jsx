import React from 'react';
import styled, { css } from '@emotion/native';

const SIZE = 0.75;
const CHECKBOX_SIZE = `${SIZE}rem`;

const CheckBox = styled.View`
  height: ${CHECKBOX_SIZE};
  width: ${CHECKBOX_SIZE};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, selected }) =>
    selected ? theme.primaryBackgroundColor : theme.primaryColor};
  border-radius: ${`${SIZE / 5}`}rem;
  margin-right: calc(${CHECKBOX_SIZE} / 3 * 2);
  background-color: ${({ theme, completed, selected }) =>
    completed
      ? selected
        ? theme.primaryBackgroundColor
        : theme.primaryColor
      : null};
`;

export default CheckBox;
