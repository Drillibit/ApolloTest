import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';


export const H2 = props => (
  <h2>
    {props.children}
  </h2>
);

H2.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
};
