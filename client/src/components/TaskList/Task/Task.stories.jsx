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

export const completedTask = () => <Task completed={true}>Completed Task</Task>;

export const selectedIncompleteTask = () => (
  <Task completed={false} selected={true}>
    Incomplete Task
  </Task>
);

export const selectedIncompleteTaskWithDueTime = () => (
  <Task completed={false} selected={true} dueTime={'17:00'}>
    Selected Incomplete Task with Due Time
  </Task>
);

export const selectedCompletedTaskWithDueTime = () => (
  <Task completed={true} selected={true} dueTime={'17:00'}>
    Selected Completed Task
  </Task>
);
