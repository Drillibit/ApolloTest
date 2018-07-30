import { Component } from 'react';
import RaeactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Modal extends Component {  
  render() {
    return RaeactDOM.createPortal(this.props.children, this.props.domeNode);
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  domeNode: PropTypes.instanceOf(Element).isRequired
};
