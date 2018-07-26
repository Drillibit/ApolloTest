import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MoviePlayer } from '../MoviePlayer';

export class MovieCard extends Component {
    state = {
      renderPlayer: false
    };

    handleRender = () => {
      this.setState({
        renderPlayer: !this.state.renderPlayer
      });
    };

    render() {
      const { title, id } = this.props;
      const { renderPlayer } = this.state;
      return (
        <li>
          <p>{title}</p>
          <button onClick={this.handleRender}>Show Video</button>
          {renderPlayer && <MoviePlayer id={id} />}
        </li>
      );
    }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
