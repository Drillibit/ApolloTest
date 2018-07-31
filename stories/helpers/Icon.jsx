import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = ({ icon }) => <FontAwesomeIcon icon={icon === 'heart-fillout' ? ['far', 'heart'] : icon} />;