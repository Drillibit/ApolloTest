import React from 'react';
import { string } from 'prop-types';

import { Button } from '$UIKit/Button';
import { Icon } from '$UIKit/Icon';
import { colors } from '$helpers/colors';
import { CURRENT_USER } from './Requests/user';

export const FavouriteButton = (props) => {
  const isFavourite = props.data.currentUser ? props.data.currentUser.favouriteMovies.find(el => el._id === props.movieId) : false;

  const toggleFavourite = () => {
    props.mutate({
      variables: {
        userId: props.data.currentUser.id, favouriteId: props.movieId, favourite: isFavourite instanceof Object
      },
      refetchQueries: [{ query: CURRENT_USER }]
    });
  };

  if (!props.data.currentUser) {
    return '';
  }

  return (
    <Button btnType={props.btnType} btnSize="small" onClick={toggleFavourite}>
      <Icon icon={isFavourite ? 'heart-fill' : 'heart'} color={isFavourite ? colors.purple : 'inherit'} /> {isFavourite ? 'В избранном' : 'В избанное'}
    </Button>
  );
};

FavouriteButton.propTypes = {
  btnType: string,
};

FavouriteButton.defaultProps = {
  btnType: '',
};
