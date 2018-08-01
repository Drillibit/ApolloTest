import React from 'react';
import { func, objectOf } from 'prop-types';
import styled from 'styled-components';

const searchPhrase = 'Найти по названию, жанру, актеру';

const InputStyled = styled.input`
  width: 400px;
  height: 64px;
  padding: 16px 24px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #494c62;
  font-family: 'Source Sans Pro';
  outline: none;
`;

const UlStyled = styled.ul`
  padding: 0;
  margin: 2px;
  width: 500px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
  font-family: 'Source Sans Pro';
`;

const LiStyled = styled.li`
  &:hover a {
    color: #ff0079;
    text-decoration: underline;
  };
  margin: 5px 0;
  padding-left: 24px;
  cursor: pointer;
  height: 25px;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #494c62;
  list-style-type: none;
  font-family: 'Source Sans Pro';
`;

const A = styled.a`
  text-decoration: none;
`;

export const Search = ({ filmsList, onChange }) => (
  <form onSubmit={e => e.preventDefault()}>
    <InputStyled
      maxLength={37}
      type="text"
      placeholder={searchPhrase}
      onChange={onChange}
    />
    <UlStyled>
      {
        filmsList.map(film => <LiStyled key={film.id}><A href="">{film.title}</A></LiStyled>)
      }
    </UlStyled>
  </form>
);


Search.propTypes = {
  onChange: func,
  filmsList: objectOf().isRequired
};

Search.defaultProps = {
  onChange: f => f,
};
