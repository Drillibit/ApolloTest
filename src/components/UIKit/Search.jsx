import React from 'react';
import { func, string, arrayOf, object } from 'prop-types';
import styled from 'styled-components';
import search from '../../assets/img/search-icon.svg';


const SearchStyled = styled.div`
  vertical-align: middle;
  width: 441px;
  height: 64px;
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  vertical-align: middle;
  display: inline-block;
`;

const InputStyled = styled.input`
  vertical-align: middle;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
  line-height: 1.6;
  background-color: black;
  outline: none;
    -webkit-transition: all .55s ease;
    -moz-transition: all .55s ease;
    -ms-transition: all .55s ease;
    -o-transition: all .55s ease;
  transition: all .55s ease;
  :focus, :active, :hover {
    background-color: #494c62;
    height: 64px;
    width: 400px;
  }
`;

const UlStyled = styled.ul`
  background-color: #ffffff;
  padding: 0;
  margin: 2px;
  width: 500px;
  border-radius: 2px;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
`;

const LiStyled = styled.li`
  &:hover a {
    color: #ff0079;
    text-decoration: underline;
  };
  margin: 5px 0;
  padding-left: 24px;
  height: 25px;
  font-size: 20px;
  color: #494c62;
  list-style-type: none;
`;

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #ff0079;
    text-decoration: underline;
  };
`;


const searchPhrase = 'Найти по названию, жанру, актеру';

export const Search = ({ onChange, value, result }) => (
  <SearchStyled>
    <StyledIcon src={search} />
    <InputStyled
      type="text"
      placeholder={searchPhrase}
      onChange={onChange}
      value={value}
    />
    {(!result.length) || (
      <UlStyled>
        {
          result.map(item => <LiStyled key={item.id}><A href="">{item.title}</A></LiStyled>)
        }
      </UlStyled>
    )}
  </SearchStyled>
);

Search.propTypes = {
  onChange: func,
  value: string,
  result: arrayOf(object)
};

Search.defaultProps = {
  onChange: f => f,
  value: '',
  result: []
};
