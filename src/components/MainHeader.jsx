import React, { Component } from 'react';
import { func } from 'prop-types';

import { MainHeader } from './UIKit/MainHeader';

export class HeaderParent extends Component {
  static propTypes = {
    fetchMoviesByKeyword: func.isRequired,
    clearSearch: func.isRequired
  }

  state = {
    value: '',
    isOpen: false,
  };


  handleChange = (e) => {
    const { value } = e.target;
    const { fetchMoviesByKeyword } = this.props;
    this.timeOut = setTimeout(() => {
      if (value.length > 0) {
        fetchMoviesByKeyword(value);
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
    clearTimeout(this.timeOut);
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
