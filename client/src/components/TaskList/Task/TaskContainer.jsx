import styled from '@emotion/native';

const TaskContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, selected }) =>
    selected ? theme.primaryColor : theme.primaryBackgroundColor};
  padding: ${({ verticalPadding, horizontalPadding }) =>
    `${verticalPadding} ${horizontalPadding}`};
  border-radius: 3px;
`;

export default TaskContainer;
