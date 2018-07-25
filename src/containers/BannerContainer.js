import { connect } from 'react-redux';
import { Banner } from '../components/Banner';

const mapStateToProps = state => ({ films: state });

export const BannerContainer = connect(mapStateToProps)(Banner);
