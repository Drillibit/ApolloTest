/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';

import { Preloader } from '$UIKit/Preloader';

const StyledPreloaderWrapper = styled.div`
  
`;

export class LazyLoader extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoad: false,
      hasMore: this.props.hasMore,
      offset: 600,
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.props.children.props.children[0]);
  };
  
  handleScroll = (e) =>{
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled === this.state.offset || scrolled > this.state.offset) {
      this.setState({ isLoad: true });
      setTimeout(this.props.handleBla, 2000);
    }
    else {
      this.setState({ isLoad: false });
    }
  };

  render() {
    const { count } = this.state;
    const { children } = this.props;

    return (
      <div>
        <div onScroll={this.handleScroll}>
          {children}
        </div>
        <StyledPreloaderWrapper>
          {this.state.isLoad ? <Preloader>Загрузка</Preloader> : ''}
        </StyledPreloaderWrapper>
      </div>
    );
  }
}


