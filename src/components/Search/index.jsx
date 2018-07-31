import React from 'react';
import PropTypes from 'prop-types';


// test films list
// отключить filmList когда будет бекэнд
import { filmsList } from './testFilmList';

const searchPhrase = 'Найти по названию, жанру, актеру';

export const Search = ({ search }) => {
  let input;

  return (
    <form>
      <input
        list="search"
        placeholder={searchPhrase}
        onChange={() => search(input.value)}
        ref={(node) => { input = node; }}
      />
      <datalist id="search">
        {
          filmsList.map(item => <option value={item.title} key={item.id} />)
        }
      </datalist>
      <input type="submit" hidden />
    </form>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired
};
