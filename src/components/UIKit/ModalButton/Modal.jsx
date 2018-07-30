import { Component } from 'react';
import RaeactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Modal extends Component {

  render() {
    console.log(this.props)
    return RaeactDOM.createPortal(this.props.children, this.props.domeNode);
  }
}

Modal.defaultProps = {
  domeNode: document.querySelector('.ReactModalPortal')
};