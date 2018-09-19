import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { SIGN_UP, CURRENT_USER } from '../../Requests/user';
// import styled from 'styled-components';

export class SignUp extends PureComponent {
  state = {
    name: '',
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
    const { name, password, email } = this.state;
    return (
      <Mutation mutation={SIGN_UP} refetchQueries={[{ query: CURRENT_USER }]}>
        {signUp => (
          <form onSubmit={(e) => {
            e.preventDefault();
            signUp({
              variables: {
                name,
                email,
                password
              }
            });
          }}
          >
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" onChange={this.handleInputChange} />
            <label htmlFor="email">Email:</label>
            <input name="email" type="text" onChange={this.handleInputChange} />
            <label htmlFor="password">Password:</label>
            <input name="password" type="password" onChange={this.handleInputChange} />
            <button>Submit</button>
          </form>
        )}
      </Mutation>
    );
  }
}
