import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import { colors } from '../../helpers/colors';
import { Button } from '../Button';

import { LOG_IN, CURRENT_USER } from '../../Requests/user';

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
const StyledCustomBtn = styled(Button)`
  padding: 0 36px;
`;

const FormField = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 5px 0;
  font-size: 17px;
`;

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  width: 70%;
`;

const StyledLabel = styled.label`
  color: ${colors.grey300};
`;
export class LogIn extends PureComponent {
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
    const { email, password } = this.state;
    return (
      <Mutation mutation={LOG_IN} refetchQueries={[{ query: CURRENT_USER }]}>
        {logIn => (
          <form onSubmit={(e) => {
            e.preventDefault();
            logIn({
              variables: {
                email,
                password
              }
            });
          }}
          >
            <FormField>
              <StyledLabel htmlFor="email">Почта:</StyledLabel>
              <FormInput name="email" type="text" onChange={this.handleInputChange} />
            </FormField>
            <FormField>
              <StyledLabel htmlFor="password">Пароль:</StyledLabel>
              <FormInput name="password" type="password" onChange={this.handleInputChange} />
            </FormField>
            <BtnWrapper>
              <StyledCustomBtn btnType="primary">Отправить</StyledCustomBtn>
            </BtnWrapper>
          </form>
        )}
      </Mutation>
    );
  }
}
