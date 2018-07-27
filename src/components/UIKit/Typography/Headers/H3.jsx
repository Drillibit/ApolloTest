import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';


export const H3 = props => (
  <h3>
    {props.children}
  </h3>
);

H3.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
};
