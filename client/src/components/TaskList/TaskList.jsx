import React from 'react';
import styled, { css } from '@emotion/native';

import Task from './Task';
import TaskListHeader from './TaskListHeader';

const TaskListContainer = styled.View`
  display: flex;
  background: white;
`;

const TaskList = ({ tasks, date }) => {
  return (
    <TaskListContainer>
      <TaskListHeader date={date} />
      {tasks.map(({ id, name, ...props }) => (
        <Task key={id} {...props}>
          {name}
        </Task>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;
