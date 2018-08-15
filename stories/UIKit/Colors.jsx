import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '$components/helpers/colors';

const StyledColorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
`;

const StyledColorWrapper = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  margin-right: 20px;
`;

const StyledColorRect = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
`;

const StyledColorTitle = styled.div`
  color: #333;
  text-align: center;
  margin-top: 5px;
`;

const Color = ({ color, children }) => (
  <StyledColorWrapper>
    <StyledColorRect color={color}>{color}</StyledColorRect>
    <StyledColorTitle>{children}</StyledColorTitle>
  </StyledColorWrapper>
);

const stories = storiesOf('UIKit', module);

stories.addWithJSX('Colors', () => (
  <StyledColorsWrapper>
    {Object.keys(colors).map(color => <Color color={colors[color]} key={color}>{color}</Color>)}
  </StyledColorsWrapper>
));

Color.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

Color.defaultProps = {
  color: 'purple',
};
