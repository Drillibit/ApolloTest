import React, { Component } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import bg from '../../assets/img/mask.png';
import { MainHeader } from '../UIKit/MainHeader';

const StyledContainer = styled.div`
  height: 500px;
  background-image: url(${bg});
`;

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
    const { fetchMoviesByKeyword } = this.props;
    if (e.target.value.length > 0) { fetchMoviesByKeyword(e.target.value); }
    this.setState({ value: e.target.value });
  };

  handleClick = () => {
    this.setState(state => ({ ...state, isOpen: !state.isOpen }));
  };

  handleClose = () => {
    const { clearSearch } = this.props;
    clearSearch();
    this.setState(() => ({ isOpen: false }));
  };

  render() {
    return (
      <StyledContainer>
        <MainHeader
          onChange={this.handleChange}
          onClick={this.handleClick}
          onClose={this.handleClose}
          {...this.props}
          {...this.state}
        />
      </StyledContainer>
    );
  }
}
