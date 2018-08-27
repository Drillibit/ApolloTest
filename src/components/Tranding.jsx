import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FeaturedMovie } from './UIKit/FeaturedMovie';


// export class Tranding extends Component {
//   render() {
//     console.log(this.props, 'props');
//     return (
//       <div>
//         <FeaturedMovie film={this.props.store.movie} />
//       </div>
//     );
//   }
// }

const FrontPageStyled = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
`;

export const Tranding = props => (
  <FrontPageStyled>
    <FeaturedMovie film={props.store.movie} />
  </FrontPageStyled>
);
