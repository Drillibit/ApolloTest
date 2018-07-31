import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

// test films list
// отключить filmList когда будет бекэнд
import { filmsList } from '../Search/testFilmList';

const searchPhrase = 'Найти по названию, жанру, актеру';

const StyledForm = styled.form`
  
`;

const StyledInput = styled.input`
  width: 400px;
  height: 64px;
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
`;

const StyledOption = styled.option`
  width: 500px;
  height: 101px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #494c62;
  border: 10px;
`;

const StyledDataList = styled.datalist`
  width: 500px;
  height: 101px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #494c62;
  border: 10px;
`;

export const Search = ({ search }) => (
  <form>
    <StyledInput type="text" onChange={search} placeholder={searchPhrase} list="search" />
    <StyledDataList id="search">
      {
        filmsList.map(item => <StyledOption value={item.title} key={item.id} />)
      }
    </StyledDataList>
  </form>
);

Search.propTypes = {
  search: func,
};

Search.defaultProps = {
  search: f => f,
};
