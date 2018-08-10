import { connect } from 'react-redux';
import { FilmsList } from '../components/FilmsList';

const mapStateToProps = state => ({ films: state });

export const FilmsListContainer = connect(mapStateToProps)(FilmsList);
