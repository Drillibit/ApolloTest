import React, { Components } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FeaturedMovie } from './UIKit/FeaturedMovie';

export class Tranding extends Components {
  render() {
    return (
      <div>
        <FeaturedMovie />
      </div>
    );
  }
}
