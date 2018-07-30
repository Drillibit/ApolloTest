import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilm } from '../../redux/actions/actions';

// test films list
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

const mapStateToProps = state => ({ films: state });

const mapDispatchToProps = dispatch => ({ search: bindActionCreators(fetchFilm, dispatch) });

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);


/*
export class Search extends React.Component {
  state = {
    filmList: ''
  };

  onChange = e => (
    this.setState({ filmList: e.target.value },
      () => this.props.search(this.state.filmList))
  )

  render() {
    console.log(this.props, 'props');
    console.log(this.state, 'state');
    // console.log(this.state.filmList, 'filmList');
    return (
      <div>
        <form>
          <input list="search" placeholder={searchPhrase} onChange={this.onChange} />
          <datalist id="search">
            {
              this.props.films.filmsList.map((item) => {
                // console.log(item, 'itemxz`');
                return (
                  <option value={item.title} key={item.id} />
                )
              })
            }
          </datalist>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
*/
