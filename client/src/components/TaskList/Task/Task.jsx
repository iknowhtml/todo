import React from 'react';
import { css } from '@emotion/native';

import CheckBox from './CheckBox';
import DueTime, { convertToStandardTime } from './DueTime';
import TaskContainer from './TaskContainer';
import StrikeThrough from './StrikeThrough';
import TaskText from './TaskText';

const HORIZONTAL_PADDING = '0.5rem';
const VERTICAL_PADDING = '0.3rem';

const task = ({ children, completed, dueTime, selected }) => (
  <TaskContainer
    selected={selected}
    verticalPadding={VERTICAL_PADDING}
    horizontalPadding={HORIZONTAL_PADDING}
  >
    <CheckBox completed={completed} selected={selected} />
    <TaskText selected={selected}>{children}</TaskText>
    {dueTime && !completed && (
      <DueTime>{convertToStandardTime(dueTime)}</DueTime>
    )}
    {completed && (
      <StrikeThrough
        selected={selected}
        horizontalTrimWidth={HORIZONTAL_PADDING}
      />
    )}
  </TaskContainer>
);

export default task;
