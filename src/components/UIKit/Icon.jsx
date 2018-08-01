import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const Icon = ({ icon }) => {
  const f = (name) => {
    switch (name) {
      case 'heart-fill':
        return ['fas', 'heart'];
      case 'heart':
        return ['far', 'heart'];
      case 'facebook':
        return ['fab', 'facebook-f'];
      case 'twitter':
        return ['fab', 'twitter'];
      case 'google-plus':
        return ['fab', 'google-plus-g'];
      default:
        return name;
    }
  };

  return <FontAwesomeIcon icon={f(icon)} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
