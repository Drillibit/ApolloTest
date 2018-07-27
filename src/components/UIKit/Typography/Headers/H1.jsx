import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';


export const H1 = props => (
  <h1>
    {props.children}
  </h1>
);

H1.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
};

