import React from 'react';
import styled from '@emotion/native';
import { format, parseISO } from 'date-fns';
import Text from '../../Common/Text';

const HeaderContainer = styled.View`
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

const TaskListHeader = ({ date, today = format(new Date(), 'yyyy-MM-dd') }) => {
  const isToday = date === today;
  const dateObject = parseISO(date);
  const dayOfWeek = format(dateObject, 'EEEE');
  const monthDay = format(dateObject, 'MMMM do');
  return (
    <HeaderContainer>
      <DayOfWeekHeader>
        {isToday ? 'today' : dayOfWeek.toLowerCase()}
      </DayOfWeekHeader>
      <DateHeader>
        {(isToday ? `${dayOfWeek},  ${monthDay}` : `${monthDay}`).toUpperCase()}
      </DateHeader>
    </HeaderContainer>
  );
};

export default TaskListHeader;
