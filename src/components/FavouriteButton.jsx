import React from 'react';
import { Button } from '$UIKit/Button';
import { Icon } from '$UIKit/Icon';
import { colors } from '$helpers/colors';

export const FavouriteButton = ({ isFavourite, btnType, toggleFavourite }) => (
  <Button btnType={btnType} btnSize="small" onClick={toggleFavourite}>
    <Icon icon={isFavourite ? 'heart-fill' : 'heart'} color={isFavourite ? colors.purple : 'inherit'} /> {isFavourite ? 'В избранном' : 'В избанное'}
  </Button>
);
