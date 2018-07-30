import React, { Component, Fragment } from 'react';
import { Modal } from './Modal';
import { ModalRegister } from '../ModalRegister';

export class ModalButton extends Component {
    state = {
      displayModal: false
    };

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
            <Modal domeNode={document.getElementById('portal')}>
              <ModalRegister onClick={this.hideModal} />
            </Modal>)}
        </Fragment>
      );
    }
}
