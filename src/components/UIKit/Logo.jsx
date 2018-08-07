import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import { Keeno } from '../../assets/img/keeNo';

const ImgStyled = styled(Keeno)`
  display: block;
  width: 100%;
`;

export const Logo = ({ color }) => (
  <ImgStyled color={color} />
);

Logo.propTypes = {
  color: string
};

Logo.defaultProps = {
  color: ''
};
