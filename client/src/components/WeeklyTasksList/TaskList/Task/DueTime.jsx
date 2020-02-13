import React from 'react';
import styled, { css } from '@emotion/native';
import Text from '../../../Common/Text';

const DueTime = styled(Text)`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondaryColor}
  margin-left: auto;
`;

const convertToStandardTime = time => {
  const [hour, minute] = time.split(':');
  const standardTime = `${hour % 12}:${minute}`;
  return hour < 12 ? `${standardTime} AM` : `${standardTime} PM`;
};

export { convertToStandardTime };
export default DueTime;
