import React from 'react';

import { Button } from './UIKit/Button';
import { Icon } from './UIKit/Icon';
import { colors } from './helpers/colors';
import { CURRENT_USER } from './Requests/user';

const resolveMoives = (favouriteMovies:[{_id:string}], id:string) => {
  const movieObj:any = favouriteMovies.reduce((acc, item) => ({ ...acc, [item._id]: { ...item } }), {});
  if (movieObj[id]) {
    delete movieObj[id];
    return Object.values(movieObj);
  }
  const arr = Object.values(movieObj);
  arr.push({ __typename: 'MovieId', _id: id });
  return arr;
};

export const FavouriteButton = (props:any) => {
  const isFavourite = props.data.CurrentUser ?
    props.data.CurrentUser.favouriteMovies.find((el:any) => el._id === props.movieId)
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
      update: (store:any, { data: addFavourite }:any) => {
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
      <Icon size="" icon={isFavourite ? 'heart-fill' : 'heart'} color={isFavourite ? colors.purple : 'inherit'} /> {isFavourite ? 'В избранном' : 'В избанное'}
    </Button>
  );
};


FavouriteButton.defaultProps = {
  btnType: '',
};
