import styled, { css } from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

export const StyledGrid = styled(Grid)``;

export const StyledRow = styled(Row)``;

export const StyledCol = styled(Col)`
  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `}
  ${({ marginRight }) => marginRight && css`
    margin-left: ${marginRight};
  `}
`;
