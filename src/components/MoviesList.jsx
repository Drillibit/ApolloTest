import React from 'react';
import { func, object, objectOf, arrayOf, number } from 'prop-types';

export class MoviesList extends React.Component {
  componentDidMount() {
    this.props.fetchNowPlaying();
  }

  render() {
    const { list, listById } = this.props;

    return (
      <React.Fragment>
        {list.map(id => listById[id] && <h3 key={id}>{listById[id].title}</h3>)}
      </React.Fragment>
    );
  }
}

MoviesList.propTypes = {
  list: arrayOf(number),
  listById: objectOf(object),
  fetchNowPlaying: func,
};

MoviesList.defaultProps = {
  list: [],
  listById: {},
  fetchNowPlaying: f => f,
};
