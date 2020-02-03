import React from 'react';
import styled, { css } from '@emotion/native';

import CheckBox from './CheckBox';
import Text from '../../Common/Text';
import DueTime, { convertToStandardTime } from './DueTime';

const VERTICAL_PADDING = '0.3rem';
const HORIZONTAL_PADDING = '0.5rem';

const TaskContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, selected }) =>
    selected ? theme.primaryColor : theme.primaryBackgroundColor};
  padding: ${VERTICAL_PADDING} ${HORIZONTAL_PADDING};
  border-radius: 3px;
`;

const StrikeThrough = styled.View`
  position: absolute;
  top: 50%;
  width: calc(100% - ${HORIZONTAL_PADDING} * 2);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme, selected }) =>
    selected ? theme.primaryBackgroundColor : theme.primaryColor};
`;

const TaskText = styled(Text)`
  color: ${({ theme, selected }) =>
    selected ? theme.primaryBackgroundColor : null};
  font-weight: 300;
`;

const task = ({ children, completed, dueTime, selected }) => (
  <TaskContainer selected={selected}>
    <CheckBox completed={completed} selected={selected} />
    <TaskText selected={selected}>{children}</TaskText>
    {dueTime && <DueTime>{convertToStandardTime(dueTime)}</DueTime>}
    {completed && <StrikeThrough selected={selected} />}
  </TaskContainer>
);

export default task;
