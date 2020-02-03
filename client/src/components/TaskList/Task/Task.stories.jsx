import React from 'react';
import Task from './Task';

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

export const selectedIncompleteTask = () => (
  <Task completed={false} selected={true}>
    Incomplete Task
  </Task>
);

export const selectedIncompleteTaskWithDueTime = () => (
  <Task completed={false} selected={true} dueTime={'17:00'}>
    Incomplete Task
  </Task>
);
