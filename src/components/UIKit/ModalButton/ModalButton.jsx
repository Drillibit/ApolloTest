import React, { Component, Fragment } from 'react';
import { Modal } from './Modal';
import { ModalRegister } from '../ModalRegister';

const root = document.getElementById('root');

export class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false
    };
    this.element = document.createElement('div');
  }

  componentDidMount() {
    root.appendChild(this.element);
  }

  componentWillUnmount() {
    root.removeChild(this.element);
  }

    hideModal = () => {
      this.setState({
        displayModal: false
      });
    }

    showModal = () => {
      this.setState({
        displayModal: true
      });
    }


    render() {
      return (
        <Fragment>
          <button onClick={this.showModal}>Show register</button>
          {this.state.displayModal && (
            <Modal domeNode={this.element}>
              <ModalRegister onClick={this.hideModal} onRequestClose={this.hideModal} />
            </Modal>)}
        </Fragment>
      );
    }
}
