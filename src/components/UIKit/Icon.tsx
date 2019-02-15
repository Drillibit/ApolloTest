import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { colors } from '../helpers/colors';

/*eslint-disable */
type iconMapTypes = {
  [key: string]: string[];
};

const iconMap:iconMapTypes = {
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

type KeyVal = {
  [key: string]: string;
}

const sizes: KeyVal = {
  'sm': '16px',
  'md': '24px',
  'lg': '36px',
  'xl': '46px',
};
/*eslint-disable */

type IconProps = {
  icon: string,
  size: string,
  color: string
};

const StyledIcon = styled.i<IconProps>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
`;

export class Icon extends PureComponent<IconProps> {
  render () {
    const {
      icon, size, color, ...props
    } = this.props;
    return (
      <StyledIcon
        size={size in sizes ? sizes[size] : size}
        color={color in colors ? colors[color] : color}
      >
        <FontAwesomeIcon icon={iconMap[icon]} {...props} />
      </StyledIcon>
    );
  }
}
