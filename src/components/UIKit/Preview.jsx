import React from 'react';
import styled from 'styled-components';

import { H3 } from './Typography';
import { colors } from '../helpers/colors';

const StyledPreviewContainer = styled.div`
  width: 282px;
  height: 284px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
`;

const StyledHeader = H3.extend`
  color: ${colors.grey500};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 16px 12px;
`;

export const Preview = () => (
  <StyledPreviewContainer>
    <StyledHeader>Фантастические твари и где они обитают</StyledHeader>
  </StyledPreviewContainer>
);
