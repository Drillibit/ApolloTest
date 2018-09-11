import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';

const getUser = gql`
  query getUser ($page: page) {
    users(page: $page) @client {
      page
      userArr
    }
  }
`;

const Wrapper = styled.div`
 display: flex;
 min-height: 600px;
 justify-content: center;
 align-items: center;
`;

const User = props => (
  <Wrapper>
   {console.log(props.data) }
    <p>User Component</p>
  </Wrapper>
);


export const UserContainer = compose(
  graphql(getUser, {
    options: () => ({
      variables: {
        page: 1
      }
    }),
    props: data => ({
      data
    })
  })
)(User);
