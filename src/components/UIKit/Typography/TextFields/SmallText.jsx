import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';

const style = {
  font-size: 12px
};

/*font-weight: normal,
  font-style: normal,
  font-stretch: normal,
  line-height: normal,
  letter-spacing: normal,*/

export const SmallText = props => (
  <p style={style}>
    {props.children}
  </p>
);

SmallText.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
};

