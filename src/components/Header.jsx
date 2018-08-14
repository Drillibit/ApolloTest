import React, { Component } from 'react';
import { func } from 'prop-types';

import { MainHeader } from './UIKit/MainHeader';

export class Header extends Component {
  static propTypes = {
    searchMovies: func.isRequired,
    clearSearch: func.isRequired
  }

  state = {
    value: '',
    isOpen: false,
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { searchMovies } = this.props;
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      if (value.length > 0) {
        searchMovies(value);
      }
    }, 500);

    this.setState({ value: e.target.value });
  };

  handleClick = () => {
    this.setState(state => ({ ...state, isOpen: !state.isOpen }));
  };

  handleClose = () => {
    const { clearSearch } = this.props;
    clearSearch();
    this.setState(() => ({
      isOpen: false,
      value: ''
    }));
  };

  render() {
    return (
      <MainHeader
        onChange={this.handleChange}
        onClick={this.handleClick}
        onClose={this.handleClose}
        {...this.props}
        {...this.state}
      />
    );
  }
}
