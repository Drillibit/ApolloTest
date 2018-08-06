import React from 'react';
import styled from 'styled-components';

import bg from './tmp/tempbg.png';
import { H3 } from './Typography';
import { colors } from '../helpers/colors';
import { Rating } from './Rating';

const StyledPreviewContainer = styled.div`
  width: 282px;
  height: 284px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledHeader = H3.extend`
  color: ${colors.grey500};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 16px 12px 2px 12px;
`;

const BgKeeper = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 0 0 2px 2px;
`;

export const Preview = props => (
  <StyledPreviewContainer>
    <StyledHeader>Фантастические твари и где они обитают</StyledHeader>
    <Rating {...props} />
    <BgKeeper src={bg} alt="bg" />
  </StyledPreviewContainer>
);
