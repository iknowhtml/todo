import React from 'react';
import { css } from '@emotion/native';

import CheckBox from './CheckBox';
import DueTime, { convertToStandardTime } from './DueTime';
import TaskContainer from './TaskContainer';
import StrikeThrough from './StrikeThrough';
import TaskText from './TaskText';

const task = ({ children, completed, dueTime, selected }) => (
  <TaskContainer selected={selected}>
    <CheckBox completed={completed} selected={selected} />
    <TaskText selected={selected}>{children}</TaskText>
    {dueTime && !completed && (
      <DueTime>{convertToStandardTime(dueTime)}</DueTime>
    )}
    {completed && <StrikeThrough selected={selected} />}
  </TaskContainer>
);

export default task;
