import React, { PureComponent, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { func } from 'prop-types';

import { Button } from '../Button';
import { colors } from '../../helpers/colors';
import { H3 } from '../Typography';
import { Icon } from '../Icon';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';

const StyledCustomBtn = styled(Button)`
  padding: 0 36px;
`;

const ModalOverlay = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ModalContainer = styled.div`
  width: 412px;
  height: 240px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41),
    0 2px 9px 1px rgba(0, 0, 0, 0.28);
  margin: 0 auto;
  z-index: 2;
  position: relative;
`;
const Border = css`
  border-bottom: 3px solid ${colors.purple};
`;

const ModalHeader = H3.extend`
  width: 116px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto;
  line-height: 1.2;
  color: ${colors.grey500};
  text-align: center;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  padding-bottom: 4px;
  height: 30px;
  transition: all 0.3s ease;
  ${({ active }) => active && Border}
`;

const CloseSign = styled(Icon)`
  display: inline;
  margin: 10px 10px 0 0;
  color: ${colors.grey500};
`;

const CloseContainer = styled.div`
  display: flex;
  width: 100%;
  font-size: 21px;
  justify-content: flex-end;
`;

const StyledBtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export class ModalRegister extends PureComponent {
  static propTypes = {
    onClose: func
  };

  static defaultProps = {
    onClose: f => f
  };
  state = {
    formStatus: true
  };

  statusReg = () => {
    this.setState({
      formStatus: true
    });
  };

  statusSign = () => {
    this.setState({
      formStatus: false
    });
  };

  render() {
    const { onClose } = this.props;
    const { formStatus } = this.state;
    return (
      <Fragment>
        <ModalContainer>
          <CloseContainer>
            <CloseSign icon="close" onClick={onClose} />
          </CloseContainer>
          <StyledBtnGroup>
            <ModalHeader
              btnType="primary"
              onClick={this.statusReg}
              active={formStatus}
            >
              Войти
            </ModalHeader>
            <ModalHeader
              btnType="primary"
              onClick={this.statusSign}
              active={!formStatus}
            >
              Регистрация
            </ModalHeader>
          </StyledBtnGroup>
          {this.state.formStatus ? <LogIn /> : <SignUp />}
        </ModalContainer>
        <ModalOverlay onClick={onClose} />
      </Fragment>
    );
  }
}
