import React from 'react';
import { string } from 'prop-types';

import { Button } from '$UIKit/Button';
import { Icon } from '$UIKit/Icon';
import { colors } from '$helpers/colors';
import { CURRENT_USER } from './Requests/user';

const resolveMoives = (favouriteMovies, id) => {
  const movieObj = favouriteMovies.reduce((acc, item) => ({ ...acc, [item._id]: { ...item } }), {});
  if (movieObj[id]) {
    delete movieObj[id];
    return Object.values(movieObj);
  }
  const arr = Object.values(movieObj);
  arr.push({ __typename: 'MovieId', _id: id });
  return arr;
};

export const FavouriteButton = (props) => {
  const isFavourite = props.data.CurrentUser ?
    props.data.CurrentUser.favouriteMovies.find(el => el._id === props.movieId)
    :
    false;
  const toggleFavourite = () => {
    props.mutate({
      variables: {
        userId: props.data.CurrentUser.id, favouriteId: props.movieId, favourite: isFavourite instanceof Object
      },
      optimisticResponse: {
        addFavourite: {
          ...props.data.CurrentUser,
          favouriteMovies: resolveMoives(props.data.CurrentUser.favouriteMovies, props.movieId)
        }
      },
      update: (store, { data: addFavourite }) => {
        const data = store.readQuery({ query: CURRENT_USER });
        data.CurrentUser.favouriteMovies = addFavourite.addFavourite.favouriteMovies;
        store.writeQuery({ query: CURRENT_USER, data });
      }
    });
  };

  if (!props.data.CurrentUser) {
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
