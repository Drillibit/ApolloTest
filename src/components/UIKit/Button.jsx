import React from 'react';
import { func } from 'prop-types';

export const Button = ({ onClick }) => (
  <button onClick={onClick}>Press me</button>
);

Button.propTypes = {
  onClick: func,
};

Button.defaultProps = {
  onClick: f => f,
};
