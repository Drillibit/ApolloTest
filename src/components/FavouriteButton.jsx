import React, { Component } from 'react';
import { Button } from '$UIKit/Button';
import { Icon } from '$UIKit/Icon';

export class FavouriteButton extends Component {
  state = {
    isFavourite: false,
  }

  handleClick = () => {
    this.setState({ isFavourite: !this.state.isFavourite });
  }

  render() {
    const { isFavourite } = this.state;
    const { btnType } = this.props;

    return (
      <Button btnType={btnType} btnSize="small" onClick={this.handleClick}>
        <Icon icon={isFavourite ? 'heart-fill' : 'heart'} /> {isFavourite ? 'В избранном' : 'В избанное'}
      </Button>
    );
  }
}
