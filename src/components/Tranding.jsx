import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FeaturedMovie } from './UIKit/FeaturedMovie';


export class Tranding extends Component {
  componentDidMount() {
    this.props.fetchTrandingMovies();
  }

  render() {
    console.log(this.props, 'props');
    return (
      <div>
        <FeaturedMovie film={this.props.store.movie} />
      </div>
    );
  }
}

// export const Tranding = (props) => {

//   return (
//     <div>
//       <FeaturedMovie film={props.store.movie} />
//     </div>
//   );
// };
