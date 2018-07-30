import React, { Component } from 'react';

export class ButtonTest extends Component {
    state = {
      clicked: false
    };

    handleClick = () => {
      this.setState({
        clicked: !this.state.clicked
      });
    };

    render() {
      return (
        <div>
          <button onClick={this.handleClick} >Click!</button>
        </div>
      );
    }
}
