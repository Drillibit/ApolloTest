/* eslint-disable */
import React, { Component } from 'react';

import { Preloader } from '$UIKit/Preloader';

export class LazyLoader extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  
  handleScroll = (e) =>{
    console.log(e);
  };

  render() {
    const { count } = this.state;
    const { children } = this.props;

    return (
      <div onScroll={this.handleScroll}>
        {children}
      </div>
    );
  }
}


