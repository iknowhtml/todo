import styled from '@emotion/native';

const TaskContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, selected }) =>
    selected ? theme.primaryColor : theme.primaryBackgroundColor};
  padding: ${({ theme }) =>
    `${theme.taskVerticalPadding} ${theme.taskHorizontalPadding}`};
  border-radius: 3px;
`;

export default TaskContainer;
