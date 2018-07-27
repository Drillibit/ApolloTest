import styled from 'styled-components';
import { headingStyles } from './helpers';

/*
  font-size: 16px - in common
*/

export const Text = styled.p`
  ${() => headingStyles}
  
  font-weight: normal;
  font-style: normal;
`;

// export const smallText = text.extend`
//   font-size: 12px;
// `;

export const SmallText = Text.extend`
  font-size: 12px;
`;

export const LargeText = Text.extend`
  font-size: 18px;
`;

