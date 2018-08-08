import React from 'react';
import { string } from 'prop-types';

import { Keeno } from '../../assets/img/keeNo';

export const Logo = ({ color }) => (
  <Keeno color={color} />
);

Logo.propTypes = {
  color: string
};

Logo.defaultProps = {
  color: '#ffffff'
};
