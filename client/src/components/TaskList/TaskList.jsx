import React from 'react';
import styled from '@emotion/native';

import Task from './Task';

const TaskListContainer = styled.View`
  display: flex;
`;

const TaskList = ({ tasks }) => (
  <TaskListContainer>
    {tasks.map(({ id, name, completed }) => (
      <Task key={id} completed={completed}>
        {name}
      </Task>
    ))}
  </TaskListContainer>
);

export default TaskList;
