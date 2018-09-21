import React from 'react';
import PropTypes, { func } from 'prop-types';

import { Button } from '$UIKit/Button';
import { Icon } from '$UIKit/Icon';
import { colors } from '$helpers/colors';

export const FavouriteButton = props => (
  <Button btnType={props.btnType} btnSize="small" onClick={props.toggleFavourite}>
    {console.log(props)}
    <Icon icon={props.isFavourite ? 'heart-fill' : 'heart'} color={props.isFavourite ? colors.purple : 'inherit'} /> {props.isFavourite ? 'В избранном' : 'В избанное'}
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
