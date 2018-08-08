/* eslint-disable */
import React, { Component } from 'react';

import { Preloader } from '$UIKit/Preloader';
import bg from '../../../stories/UIKit/tmp/tmpbg.png';

export class LazyLoader extends Component {
  state = {
    isLoad: false
  };

  componentDidMout() {
    const img = React.findDOMNode(this);
    if (img.complete) {
      this.handleLoad();
    }
  }

  handleLoader = () => {
    this.setState({
      isLoad: true
    });
  };

  render() {
    const { isLoad } = this.state;

    return(
      <div onLoad={this.handleLoader}>
        { isLoad ? <img src={bg} /> : <Preloader>Загрузка</Preloader>}
        <img src={bg} /> 
      </div>
    );
  }
}


