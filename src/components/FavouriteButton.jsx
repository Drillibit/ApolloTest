import React from 'react';
import { Button } from '$UIKit/Button';
import { Icon } from '$UIKit/Icon';

export const FavouriteButton = ({ isFavourite, btnType }) => (
  <Button btnType={btnType} btnSize="small">
    <Icon icon={isFavourite ? 'heart-fill' : 'heart'} /> {isFavourite ? 'В избранном' : 'В избанное'}
  </Button>
);
