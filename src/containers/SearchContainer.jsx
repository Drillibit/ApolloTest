import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { func } from 'prop-types';

import { getSearchResults } from '../redux/movies/selectors';
import * as actions from '../redux/movies/actions';
import { Search } from '../components/UIKit/Search';

class SearchController extends Component {
  static propTypes = {
    searchMovies: func.isRequired,
    clearSearch: func.isRequired
  }

  state = {
    value: '',
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { searchMovies } = this.props;
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      if (value.length > 0) {
        searchMovies(value);
      }
    }, 500);

    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <Search
        onChange={this.handleChange}
        onClick={this.handleClick}
        onClose={this.handleClose}
        {...this.props}
        value={this.state.value}
      />
    );
  }
}

const mapStateToProps = state => ({
  result: getSearchResults(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions
}, dispatch);


export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchController);
