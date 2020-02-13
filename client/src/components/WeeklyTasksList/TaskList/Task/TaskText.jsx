import styled from '@emotion/native';
import Text from '../../../Common/Text';

const TaskText = styled(Text)`
  color: ${({ theme, selected }) =>
    selected ? theme.primaryBackgroundColor : null};
  font-weight: 300;
`;

export default TaskText;
