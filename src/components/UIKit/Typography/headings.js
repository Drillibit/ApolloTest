import styled from 'styled-components';
import { headingStyles } from './helpers';

export const H1 = styled.h1`
  ${() => headingStyles}

  font-size: 48px;
`;

export const H2 = styled.h1`
  ${() => headingStyles}

  font-size: 32px;
`;

export const H3 = styled.h1`
  ${() => headingStyles}

  font-size: 20px;
`;
