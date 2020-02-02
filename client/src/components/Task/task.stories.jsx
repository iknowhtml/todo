import React from 'react';

import Task from './task.jsx';

export default {
  title: 'Task',
  component: Task,
};

export const incompleteTask = () => (
  <Task completed={false}>Incomplete Task</Task>
);

export const incompleteTaskWithDueTime = () => (
  <Task completed={false} dueTime={'17:00'}>
    Incomplete Task with Due Time
  </Task>
);

export const completeTask = () => <Task completed={true}>Completed Task</Task>;

export const completeTaskWithDueTime = () => (
  <Task completed={true} dueTime={'17:00'}>
    Completed Task with Due Time
  </Task>
);
