import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { func, arrayOf, object, objectOf, any, shape } from 'prop-types';


import { Search } from '../components/UIKit/Search';

import { GET_SEARCH_RES } from '../components/Requests/search';

class SearchController extends Component {
  static propTypes = {
    searchMovies: func,
    client: objectOf(any).isRequired,
    data: shape({
      search: arrayOf(object)
    })
  }

  static defaultProps = {
    searchMovies: f => f,
    data: {
      search: []
    }
  };

  state = {
    value: '',
    results: []
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { client } = this.props;
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(async () => {
      if (value.length > 0) {
        const { data: { search } } = await client.query({
          query: GET_SEARCH_RES,
          variables: { req: value }
        });
        this.setState({
          results: search
        });
      }
    }, 500);

    this.setState({ value: e.target.value });
    if (value.length === 0) {
      this.setState({
        results: []
      });
    }
  };
  render() {
    return (
      <Search
        onChange={this.handleChange}
        onClick={this.handleClick}
        onClose={this.handleClose}
        value={this.state.value}
        result={this.state.results}
        {...this.props}
      />
    );
  }
}

export const SearchContainer = withApollo(SearchController);
