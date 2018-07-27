import { Component } from 'react';
import RaeactDOM from 'react-dom';

export class Modal extends Component {
  render() {
    return RaeactDOM.createPortal(this.props.children, this.props.domeNode);
  }
}
