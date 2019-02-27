import React from 'react';

type LogoType = {
  color?: string
};

import { Keeno } from '../../assets/img/keeNo';

export const Logo = ({ color }:LogoType) => (
  <Keeno color={color} />
);

Logo.defaultProps = {
  color: '#ffffff'
};
