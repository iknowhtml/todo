import React from 'react';
import Task from './';

export default {
  title: 'Task',
  component: Task,
};

export const incompleteTask = () => <Task>Incomplete Task</Task>;

export const incompleteTaskWithDueTime = () => (
  <Task dueTime={'17:00'}>Incomplete Task with Due Time</Task>
);

export const completedTask = () => <Task completed>Completed Task</Task>;

export const selectedIncompleteTask = () => (
  <Task selected>Incomplete Task</Task>
);

export const selectedIncompleteTaskWithDueTime = () => (
  <Task completed selected dueTime={'17:00'}>
    selected Incomplete Task with Due Time
  </Task>
);

export const selectedCompletedTaskWithDueTime = () => (
  <Task completed selected dueTime={'17:00'}>
    selected Completed Task
  </Task>
);
