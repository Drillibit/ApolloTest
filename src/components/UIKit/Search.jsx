import React from 'react';
//import { func, objectOf } from 'prop-types';
import styled from 'styled-components';
//import { target } from '../../../node_modules/glamor';
//import { TestScheduler } from 'rx';

const searchPhrase = 'Найти по названию, жанру, актеру';

/*
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
*/
const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #ff0079;
    text-decoration: underline;
  };
`;

export const Search = ({ searchFilm }) => {
  // console.log(filmsList, 'filmsList');
  // console.log(searchFilm, 'filtered');
  let input = [];
  return (
    <div>
      <input
        maxLength={37}
        type="text"
        placeholder={searchPhrase}
        onChange={e => input = searchFilm(e.target.value)}
      />
      <ul>
        {
          input.map(film => <li key={film.id}>{film.title}</li>)
        }
      </ul>
    </div>
  );
};

/*
export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      list: []
    };
  }

  dataSearch = e => {
    const value = e.target.value.toLowerCase();
    let filter = this.props.filmsList.filter(film => {
      return film.title.toLowerCase().includes(value);
    })
    if (!value) { filter = [] }
    this.setState({
      input: value,
      list: filter
     })
    console.log(value, 'value');
    return 0;
  }

  render() {
    console.log(this.props, 'props');
    console.log(this.state, 'state');
    return (
      <div>
        <input onChange={this.dataSearch} />
        <ul>
        {
          this.state.list.map(lis => <li key={lis.value}><A href="">{lis.title}</A></li>)
        }
        </ul>
      </div>
    );
  }
}
*/
/*
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
*/
/*
Search.propTypes = {
  onChange: func,
  filmsList: objectOf().isRequired
};

Search.defaultProps = {
  onChange: f => f,
};
*/