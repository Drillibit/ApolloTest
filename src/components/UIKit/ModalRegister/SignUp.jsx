import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { LOG_IN, CURRENT_USER } from '../../Requests/user';
// import styled from 'styled-components';

export class SignUp extends PureComponent {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Mutation mutation={LOG_IN} refetchQueries={[{ query: CURRENT_USER }]}>
        {logIn => (
          <form onSubmit={(e) => {
            e.preventDefault();
            logIn({
              variables: {
                email: this.state.email,
                password: this.state.password
              }
            });
          }}
          >
            <label htmlFor="email">Email:</label>
            <input name="email" type="text" onChange={this.handleInputChange} />
            <label htmlFor="password">Password:</label>
            <input name="password" type="password" onChange={this.handleInputChange} />
          </form>
        )}
      </Mutation>
    );
  }
}
