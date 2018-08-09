/* eslint-disable */
import React, { Component } from "react";
import styled from "styled-components";

import { Preloader } from "$UIKit/Preloader";

const lazy = {
  height: '700px',
  overflowY: 'scroll'
}

const StyledPreloaderWrapper = styled.div``;

const StyledLazyList = styled.div`
  height: 700px;
  overflow-y: scroll;
`;

export class LazyLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasMore: this.props.hasMore,
    };
  }

  handleScroll = e => {
    // console.log(`hasMore? : ${this.state.hasMore}`);
    // console.log(`isLoading? : ${this.state.isLoading}`);

    if (this.state.hasMore) {
      if (e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight) {
        this.setState({ isLoading: true });

        setTimeout(this.props.handleLoad, 1000);
      }
      else {
        this.setState({ isLoading: false });
      }
    }
    else {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { children } = this.props;

    return (
      <StyledLazyList onScroll={this.handleScroll}>
        {children}

        <StyledPreloaderWrapper>
          {this.state.hasMore && <Preloader>Загрузка</Preloader>}
        </StyledPreloaderWrapper>
      </StyledLazyList>
    );
  }
}
