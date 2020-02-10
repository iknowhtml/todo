import React from 'react';
import { format, addDays } from 'date-fns/fp';
import TaskList from './TaskList';

export default {
  title: 'TaskList',
  component: TaskList,
};

const tasks = [
  {
    id: 'b4e893e5-f7da-48fa-8331-c88215afb984',
    name: 'task 1',
    completed: false,
    dueTime: '17:00',
  },
  {
    id: 'ea4baa0f-1321-46aa-82b9-c58d1b8e3a3e',
    name: 'task 2',
    completed: true,
  },
  {
    id: 'eea2549e-b548-43cb-9c87-4e13fa71141a',
    name: 'task 3',
    completed: false,
    selected: true,
  },
];

export const todayTaskList = () => (
  <TaskList tasks={tasks} date={format('yyyy-MM-dd')(new Date())} />
);

export const tomorrowTaskList = () => (
  <TaskList tasks={tasks} date={format('yyyy-MM-dd')(addDays(1)(new Date()))} />
);
