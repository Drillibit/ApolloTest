import React from 'react';
import PropTypes, { func } from 'prop-types';

import { Button } from '$UIKit/Button';
import { Icon } from '$UIKit/Icon';
import { colors } from '$helpers/colors';

export const FavouriteButton = ({ isFavourite, btnType, toggleFavourite }) => (
  <Button btnType={btnType} btnSize="small" onClick={toggleFavourite}>
    <Icon icon={isFavourite ? 'heart-fill' : 'heart'} color={isFavourite ? colors.purple : 'inherit'} /> {isFavourite ? 'В избранном' : 'В избанное'}
  </Button>
);

FavouriteButton.propTypes = {
  isFavourite: PropTypes.bool,
  btnType: PropTypes.string,
  toggleFavourite: func,
};

FavouriteButton.defaultProps = {
  isFavourite: true,
  btnType: '',
  toggleFavourite: f => f,
};
