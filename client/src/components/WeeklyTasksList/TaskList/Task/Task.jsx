import React from 'react';
import styled, { css } from '@emotion/native';

import CheckBox from './CheckBox';
import DueTime, { convertToStandardTime } from './DueTime';
import StrikeThrough from './StrikeThrough';
import TaskText from './TaskText';

const TaskContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, selected }) =>
    selected ? theme.primaryColor : theme.primaryBackgroundColor};
  padding: ${({ theme }) =>
    `${theme.taskVerticalPadding} ${theme.taskHorizontalPadding}`};
  border-radius: 3px;
`;

const Task = ({ children, completed, dueTime, selected }) => (
  <TaskContainer selected={selected}>
    <CheckBox completed={completed} selected={selected} />
    <TaskText selected={selected}>{children}</TaskText>
    {dueTime && !completed && (
      <DueTime>{convertToStandardTime(dueTime)}</DueTime>
    )}
    {completed && <StrikeThrough selected={selected} />}
  </TaskContainer>
);

export default Task;
