import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '$components/helpers/colors';

export const Icon = ({
  icon, size, color, ...props
}) => {
  /* eslint-disable */

  const iconMap = {
    'heart-fill': ['fas', 'heart'],
    'heart': ['far', 'heart'],
    'chevron-left': ['fas', 'chevron-left'],
    'chevron-right': ['fas', 'chevron-right'],
    'chevron-down': ['fas', 'chevron-down'],
    'chevron-up': ['fas', 'chevron-up'],
    'search': ['fas', 'search'],
    'check': ['fas', 'check'],
    'play': ['fas', 'play'],
    'facebook': ['fab', 'facebook-f'],
    'twitter': ['fab', 'twitter'],
    'google-plus': ['fab', 'google-plus-g'],
    'quote': ['fas', 'quote-left'],
    'star-fill': ['fas', 'star'],
    'star': ['far', 'star'],
    'close': ['fas', 'times',],
  };

  const sizes = {
    'sm': '16px',
    'md': '24px',
    'lg': '36px',
    'xl': '46px',
  }

  const StyledIcon = styled.i`
    font-size: ${({ size }) => size};
    color: ${({ color }) => color};
  `;

  /* eslint-enable */

  return (
    <StyledIcon size={size in sizes ? sizes[size] : size} color={color in colors ? colors[color] : color}>
      <FontAwesomeIcon icon={iconMap[icon]} {...props} />
    </StyledIcon>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
