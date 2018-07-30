import styled, { css } from 'styled-components';

const headingStyles = css`
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: normal;
  line-height: 1.2;
`;

// Paragraphs
export const Text = styled.p`
  ${() => headingStyles}
  
  font-weight: normal;
  font-style: normal;
`;

export const SmallText = Text.extend`
  font-size: 14px;
`;

export const LargeText = Text.extend`
  font-size: 18px;
`;

// Headings
export const H1 = styled.h1`
  ${() => headingStyles}

  font-size: 48px;
`;

export const H2 = styled.h2`
  ${() => headingStyles}

  font-size: 32px;
`;

export const H3 = styled.h3`
  ${() => headingStyles}

  font-size: 20px;
`;
