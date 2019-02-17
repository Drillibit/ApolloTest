import React, { Component } from 'react';
import { withApollo, WithApolloClient } from 'react-apollo';
import styled from 'styled-components';

import { AuthControll } from './AuthControll';


import { Search } from '../components/UIKit/Search';

import { GET_SEARCH_RES } from '../components/Requests/search';

type StyledRightGroupType = {
  user: boolean
};

const StyledRightGroup = styled.div`
  display: flex;
  padding-right: 80px;
  align-items: center;
  position: absolute;
  top: 25px;
  min-width: ${({ user }:StyledRightGroupType) => (user ? '700px' : '530px')};
`;

const SearchWrapper = styled.div`
  margin: 0 20px 0 auto;
`;

type SearchControllerPorps = {
  client: WithApolloClient<any>,
  auth: {
    name: string,
    email: string,
    image: string,
  }
};

type SearchControllerState = {
  value: string,
  results: Array<{ title:string, id:string }>
}
class SearchController extends Component<SearchControllerPorps, SearchControllerState> {
  timeOut = 0;
  state = {
    value: '',
    results: []
  };

  handleChange = (e:any) => {
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
  handleClick: any;
  handleClose: any;
  render() {
    const signedIn = this.props.auth ? true : false;
    return (
      <StyledRightGroup user={signedIn}>
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
