import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { func, arrayOf, object, objectOf, any, shape } from 'prop-types';
import styled from 'styled-components';

import { AuthControll } from './AuthControll';


import { Search } from '../components/UIKit/Search';

import { GET_SEARCH_RES } from '../components/Requests/search';

const StyledRightGroup = styled.div`
  display: flex;
  padding-right: 80px;
  align-items: center;
  position: absolute;
  top: 25px;
  min-width: ${({ user }) => (user ? '700px' : '530px')};
`;

const SearchWrapper = styled.div`
  margin: 0 20px 0 auto;
`;

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
      <StyledRightGroup user={this.props.auth}>
        <SearchWrapper>
          <Search
            onChange={this.handleChange}
            onClick={this.handleClick}
            onClose={this.handleClose}
            value={this.state.value}
            result={this.state.results}
            {...this.props}
          />
        </SearchWrapper>
        <AuthControll userData={this.props.auth} />
      </StyledRightGroup>
    );
  }
}

export const SearchContainer = withApollo(SearchController);
