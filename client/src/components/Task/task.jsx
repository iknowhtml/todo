import React from 'react';
import styled, { css } from '@emotion/native';
import Text from '../Common/Text';

const CHECKBOX_SIZE = 0.75;

const TaskContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem 0.5rem;
`;

const CheckBox = styled.View`
  height: ${`${CHECKBOX_SIZE}`}rem;
  width: ${`${CHECKBOX_SIZE}`}rem;
  border: 1px solid black;
  border-radius: ${`${CHECKBOX_SIZE / 5}`}rem;
  margin-right: ${`${(CHECKBOX_SIZE / 3) * 2}`}rem;
  background-color: ${({ completed }) => (completed ? 'black' : null)};
`;

const StrikeThrough = styled.View`
  position: absolute;
  width: 100%;
  border-bottom: 1px solid black;
`;

const DueTime = styled(Text)`
  font-size: 0.75rem;
  font-weight: 600;
  color: gray;
  margin-left: auto;
`;

const convertToStandardTime = time => {
  const [hour, minute] = time.split(':');

  return hour < 12 ? `${hour % 12}:${minute} AM` : `${hour % 12}:${minute} PM`;
};

const task = ({ children, completed = false, dueTime = null }) => (
  <TaskContainer>
    <CheckBox completed={completed} />
    <Text>{children}</Text>
    {dueTime !== null && <DueTime>{convertToStandardTime(dueTime)}</DueTime>}
    {completed && <StrikeThrough />}
  </TaskContainer>
);

export default task;
