import React from 'react';
import styled from '@emotion/native';

import Text from '../Common/Text';

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.taskHorizontalPadding};
`;

const ThisWeekHeader = styled(Text)`
  font-size: 1.3rem;
  font-weight: 500;
`;

const DateRangeHeader = styled(Text)`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryColor};
  margin-left: auto;
`;

const Header = () => (
  <HeaderContainer>
    <ThisWeekHeader>this week</ThisWeekHeader>
    <DateRangeHeader>January 1st - January 7th</DateRangeHeader>
  </HeaderContainer>
);

const WeeklyTaskListContainer = styled.View`
  display: flex;
  padding: 1.5rem 0.75rem;
  background: white;
  border-radius: 3px;
`;

const WeeklyTaskList = () => (
  <WeeklyTaskListContainer>
    <Header></Header>
  </WeeklyTaskListContainer>
);

export default WeeklyTaskList;
