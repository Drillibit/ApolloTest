import React from 'react';
import styled from 'styled-components';


const ModalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&subset=cyrillic');
  font-family: 'Source Sans Pro', sans-serif;
  width: 412px;
  height: 240px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
`;

const ModalHeader = styled.h3`
  width: 116px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  margin: 0 auto;
  padding-top: 32px;
  line-height: 1.2;
  letter-spacing: normal;
  color: #494c62;
  -webkit-font-smoothing: antialiased;
`;


const ModalText = styled.p`
  width: 90%;
  height: 24px;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  margin: 0 auto;
  margin-top: 24px;
  line-height: 1.2;
  letter-spacing: normal;
  color: #494c62;
`;

export const ModalRegister = () => (
  <ModalContainer>
    <ModalHeader>Регистрация</ModalHeader>
    <ModalText>Используйте любую соцсеть для регистрации</ModalText>
  </ModalContainer>
);
