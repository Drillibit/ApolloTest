import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../helpers/colors';
import { Text, H3 } from '../Typography';
import { Icon } from '../Icon';
import { SocialContainer } from './SocialContainer';

const ModalOverlay = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ModalContainer = styled.div`
  width: 412px;
  height: 240px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
  margin: 0 auto;
  z-index: 2;
  position: relative;
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
`;

const ModalText = Text.extend`
  width: 90%;
  height: 24px;
  font-weight: 300;
  text-align: center;
  margin: 0 auto;
  margin-top: 24px;
  line-height: 1.2;
  color: ${colors.grey500};
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
export const ModalRegister = ({ onClick }) => (
  <Fragment>
    <ModalContainer>
      <CloseContainer>
        <CloseSign icon="close" onClick={onClick} />
      </CloseContainer>
      <ModalHeader>Войти</ModalHeader>
      <ModalText>Используйте любую соцсеть для регистрации</ModalText>
      <SocialContainer />
    </ModalContainer>
    <ModalOverlay onClick={onClick} />
  </Fragment>
);

ModalRegister.propTypes = {
  onClick: PropTypes.func.isRequired
};
