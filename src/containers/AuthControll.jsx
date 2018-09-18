import React, { PureComponent, Fragment } from 'react';
import { func, string, shape } from 'prop-types';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';
import { Link } from 'react-router-dom';

import { LOG_OUT } from '../components/Requests/user';

import { Button } from '../components/UIKit/Button';
import { Icon } from '../components/UIKit/Icon';
import { Modal } from '../components/UIKit/Modal';
import { ModalRegister, SocialContainer } from '../components/UIKit/ModalRegister';

const StyledCustomBtn = styled(Button)`
  padding: 0 36px;
`;

const StyledOutWrapper = styled.div`
  background: transparent;
  position: relative;
`;

const StyeldOutBtnWrapper = styled.div`
  position: absolute;
  bottom: -40px;
  left: 10px;
  padding: 4px;
  border-radius: 5px;
  background-color: #fff;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 45px;
    height: 45px;
    top: -37px;
    border-radius: 20px 20px 0 0;
    background: #fff;
    left: 35px;
  }
`;

const StyledUserIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 48px;
  z-index: 10;
  position: relative;
  border: 2px solid #fff;
`;

export class AuthControll extends PureComponent {
  static propTypes = {
    login: func,
    logout: func,
    userData: shape({
      name: string,
      email: string,
      image: string
    })
  };

  static defaultProps = {
    login: f => f,
    logout: f => f,
    userData: { }
  };

  state = {
    open: false,
    letMeOut: false
  };

  onClose = () => {
    this.setState({ letMeOut: false });
  };

  toggleModal = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  switchOut = () => {
    const { letMeOut } = this.state;
    this.setState({ letMeOut: !letMeOut });
  }

  logMeOut = () => {
    this.props.logout();
    this.setState({
      open: false,
      letMeOut: false
    });
  }

  render() {
    const { userData } = this.props;
    const { open, letMeOut } = this.state;
    return (
      <Fragment>
        {!userData && (
        <StyledCustomBtn btnType="primary" onClick={this.toggleModal}>
          Войти
        </StyledCustomBtn>)}
        {userData && (
          <Fragment>
            <Link to="/favourites">
              <Button>
                <Icon icon="heart" />Избранное
              </Button>
            </Link>
            <StyledOutWrapper>
              <StyledUserIcon src={userData.image} alt="user image" onClick={this.switchOut} />
              {letMeOut && (
              <RootClose onRootClose={this.onClose}>
                <Mutation mutation={LOG_OUT}>
                  {(logOut, { data }) => (
                    <StyeldOutBtnWrapper>
                      {console.log(logOut, data)}
                      <StyledCustomBtn btnType="primary" onClick={this.logMeOut}>
                        Выход
                      </StyledCustomBtn>
                    </StyeldOutBtnWrapper>
                  )}
                </Mutation>
              </RootClose>
              )}
            </StyledOutWrapper>
          </Fragment>
        )}
        <Modal open={open && !userData} onClose={this.toggleModal}>
          <ModalRegister>
            <SocialContainer login={this.props.login} />
          </ModalRegister>
        </Modal>
      </Fragment>
    );
  }
}
