import React from 'react';
import { Button } from '$UIKit/Button';
import { Icon } from '$UIKit/Icon';

export const FavouriteButton = ({ isFavourite, btnType, toggleFavourite }) => (
  <Button btnType={btnType} btnSize="small" onClick={toggleFavourite}>
    <Icon icon={isFavourite ? 'heart-fill' : 'heart'} /> {isFavourite ? 'В избранном' : 'В избанное'}
  </Button>
);
