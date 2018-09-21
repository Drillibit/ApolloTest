import React from 'react';
import PropTypes, { func } from 'prop-types';

import { Button } from '$UIKit/Button';
import { Icon } from '$UIKit/Icon';
import { colors } from '$helpers/colors';

export const FavouriteButton = (props) => {
  const isFavourite = props.data.currentUser ? props.data.currentUser.favouriteMovies.find(el => el._id === props.movieId) : false;
  // console.log(props.data.currentUser.favouriteMovies.find(el => el.id === '439079') );
  return (
    <Button btnType={props.btnType} btnSize="small" onClick={props.toggleFavourite}>
      <Icon icon={isFavourite ? 'heart-fill' : 'heart'} color={isFavourite ? colors.purple : 'inherit'} /> {isFavourite ? 'В избранном' : 'В избанное'}
    </Button>
  );
};

FavouriteButton.propTypes = {
  btnType: PropTypes.string,
  toggleFavourite: func,
};

FavouriteButton.defaultProps = {
  btnType: '',
  toggleFavourite: f => f,
};
