import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import { SocialContainer } from './SocialContainer';

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
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&subset=cyrillic');
  font-family: 'Source Sans Pro', sans-serif;
  width: 412px;
  height: 240px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
  margin: 0 auto;
  z-index: 2;
  position: relative;
`;

const ModalHeader = styled.h3`
  width: 116px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  margin: 0 auto;
  padding-top: 21px;
  line-height: 1.2;
  letter-spacing: normal;
  color: #494c62;
  -webkit-font-smoothing: antialiased;
`;


const ModalText = styled.p`
  width: 90%;
  height: 24px;
  font-size: 17px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  text-align: center;
  margin: 0 auto;
  margin-top: 24px;
  line-height: 1.2;
  letter-spacing: normal;
  color: #494c62;
`;
const CloseSign = styled.img`
  display: inline;
  margin: 10px 10px 0 0;
`;

const CloseContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const ModalRegister = ({ onClick }) => (
  <Fragment>
    <ModalContainer>
      {/* <CloseContainer>
        <CloseSign src={close} onClick={onClick} />
      </CloseContainer> */}
      <ModalHeader>Регистрация</ModalHeader>
      <ModalText>Используйте любую соцсеть для регистрации</ModalText>
      {/* <SocialContainer /> */}
    </ModalContainer>
    <ModalOverlay onClick={onClick} />
  </Fragment>
);

ModalRegister.propTypes = {
  onClick: PropTypes.func.isRequired
};
