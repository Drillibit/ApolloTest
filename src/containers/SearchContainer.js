import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFilm } from '../redux/actions/actions';
import { Search } from '../components/Search';

const mapStateToProps = state => ({ films: state });
const mapDispatchToProps = dispatch => ({ search: bindActionCreators(fetchFilm, dispatch) });

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
