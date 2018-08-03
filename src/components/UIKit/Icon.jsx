import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const Icon = ({ icon, ...props }) => {
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
    'close': ['fas', 'times']
  };

  /* eslint-enable */

  return <FontAwesomeIcon icon={iconMap[icon]} {...props} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
