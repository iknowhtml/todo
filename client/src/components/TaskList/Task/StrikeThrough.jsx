import styled from '@emotion/native';

const StrikeThrough = styled.View`
  position: absolute;
  top: 50%;
  width: ${({ theme }) => `calc(100% - ${theme.taskHorizontalPadding} * 2)`};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme, selected }) =>
    selected ? theme.primaryBackgroundColor : theme.primaryColor};
`;

export default StrikeThrough;
