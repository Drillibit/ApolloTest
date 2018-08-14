import styled, { css } from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

export const StyledGrid = styled(Grid)``;

export const StyledRow = styled(Row)`
  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `}
  ${({ margin }) => margin && css`
  margin: ${margin};
  `}
  ${({ padding }) => padding && css`
  padding: ${padding};
  `}
`;

export const StyledCol = styled(Col)`
  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `}
  ${({ marginRight }) => marginRight && css`
    margin-left: ${marginRight};
  `}
  ${({ padding }) => padding && css`
  padding: ${padding};
  `}
  ${({ flexBasis }) => flexBasis && css`
  flex-basis: ${flexBasis};
  `}
`;
