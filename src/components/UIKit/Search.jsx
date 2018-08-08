import React from 'react';
import { func, string, arrayOf, object, bool } from 'prop-types';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';

import { colors } from '../../components/helpers/colors';
import { SearchIcon } from '../../assets/img/search-icon';

const SearchStyled = styled.div`
  position: relative;
  width: ${({ isOpen }) => (isOpen ? '400px' : '60px')};
  height: 56px;
  padding: 12px;
  transition: width .35s ease, background .35s ease;
  background: ${({ isOpen }) => (isOpen ? 'white' : 'transparent')};
  border-radius: 5px;
  box-shadow: ${({ isOpen }) => (isOpen ? '0 2px 7px 0 rgba(0, 0, 0, 0.1)' : 'none')};
`;

const StyledIconButton = styled.button`
  display: block;
  position: absolute;
  top: 50%;
  left: 10px;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  transform: translateY(-50%);
`;

const StyledIcon = styled(SearchIcon)`
  display: block;
  width: 100%;
`;

const InputStyled = styled.input`
  display: inline-block;
  width: 100%;
  padding: 0 0 0 60px;
  font-size: 20px;
  line-height: 1.6;
  vertical-align: middle;
  background-color: transparent;
  border: none;
  outline: none;
`;


const UlStyled = styled.ul`
  background-color: #ffffff;
  margin: 20px 0 0 -11px;
  padding: 0;
  width: 500px;
  border-radius: 2px;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
`;

const LiStyled = styled.li`
  padding: 11px 0 11px 24px;
  min-height: 25px;
  font-size: 20px;
  list-style-type: none;
`;

const A = styled.a`
  text-decoration: none;
  color: #494c62;
  cursor: pointer;
  &:hover {
    color: #ff0079;
    text-decoration: underline;
  };
`;

const searchPhrase = 'Найти по названию, жанру, актеру';

export const Search = ({
  isOpen, onClick, onChange, value, result
}) => (
  <RootClose onRootClose={onClick}>
    <SearchStyled isOpen={isOpen}>
      <StyledIconButton onClick={onClick}>
        <StyledIcon color={isOpen ? colors.grey500 : 'white'} />
      </StyledIconButton>
      <InputStyled
        type="text"
        placeholder={searchPhrase}
        onChange={onChange}
        value={value}
      />
      {(isOpen && result.length > 0) && (
        <UlStyled>
          {result.map(item => <LiStyled key={item.id}><A href="">{item.title}</A></LiStyled>)}
        </UlStyled>
      )}
    </SearchStyled>
  </RootClose>
);

Search.propTypes = {
  onChange: func,
  onClick: func,
  value: string,
  isOpen: bool,
  result: arrayOf(object)
};

Search.defaultProps = {
  onChange: f => f,
  onClick: f => f,
  isOpen: false,
  value: '',
  result: []
};
