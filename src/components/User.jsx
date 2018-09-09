import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';

const getUser = gql`
  query {
    user @client {
      name
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
   {console.log(props) }
    <p>User Component</p>
  </Wrapper>
);


export const UserContainer = compose(
  graphql(getUser, {
    props: data => ({
      data
    })
  })
)(User);
