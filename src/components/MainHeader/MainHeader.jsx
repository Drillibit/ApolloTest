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
    fetchMoviesByKeyword: func.isRequired
  }

  state = {
    value: '',
    result: [],
    isOpen: false,
  };


  handleChange = (e) => {
    const { fetchMoviesByKeyword } = this.props;
    fetchMoviesByKeyword(e.target.value);
    this.setState({ value: e.target.value });
  };

  handleClick = () => {
    this.setState(state => ({ ...state, isOpen: !state.isOpen }));
  };

  handleClose = () => {
    this.setState(state => ({ ...state, isOpen: false }));
  };

  // filterFilm = () => {
  //   const { value } = this.state;
  //   const text = value.toLowerCase().trim();
  //   const filter = filmsList.filter(item => item.title.toLowerCase().includes(text));
  //   this.setState({ result: text ? filter : [] });
  // };

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
