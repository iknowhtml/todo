import React from 'react';
import styled, { css } from '@emotion/native';

import Text from '../Common/Text';
import Task from './Task';

const TaskListContainer = styled.View`
  display: flex;
  background: white;
`;

const TaskListHeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.taskHorizontalPadding};
`;

const DayOfWeekHeader = styled(Text)`
  font-size: 1.1rem;
  font-weight: 600;
`;

const DateHeader = styled(Text)`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.secondaryColor};
  margin-left: auto;
`;

const TaskListHeader = () => (
  <TaskListHeaderContainer>
    <DayOfWeekHeader>Today</DayOfWeekHeader>
    <DateHeader>MONDAY, 1 JANUARY</DateHeader>
  </TaskListHeaderContainer>
);

const TaskList = ({ tasks }) => (
  <TaskListContainer>
    <TaskListHeader />
    {tasks.map(({ id, name, ...props }) => (
      <Task key={id} {...props}>
        {name}
      </Task>
    ))}
  </TaskListContainer>
);

export default TaskList;
