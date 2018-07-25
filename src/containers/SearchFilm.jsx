import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilm } from '../redux/actions/actions';

const SearchFilm = ({ search }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          search(input.value);
          input.value = '';
        }}
      >
        <input ref={(node) => { input = node; }} />
        <button type="submit">
          Search Film
        </button>
      </form>
    </div>
  );
};

SearchFilm.propTypes = {
  search: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ films: state });

const mapDispatchToProps = dispatch => ({
  search: bindActionCreators(fetchFilm, dispatch)
});

export const SearchFilmContainer = connect(mapStateToProps, mapDispatchToProps)(SearchFilm);
