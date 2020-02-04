import React from 'react';
import styled from '@emotion/native';

import Task from './Task';

const TaskListContainer = styled.View`
  display: flex;
`;

const TaskList = ({ tasks }) => (
  <TaskListContainer>
    {tasks.map(({ id, name, ...props }) => (
      <Task key={id} {...props}>
        {name}
      </Task>
    ))}
  </TaskListContainer>
);

export default TaskList;
