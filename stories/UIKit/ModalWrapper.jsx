import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Modal } from '../../src/components/UIKit/Modal';
import { ModalRegister, SocialContainer } from '../../src/components/UIKit/ModalRegister';

class ModalWRapper extends Component {
  state = { open: false };

  toggleModal = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.toggleModal}>
          Open modal
        </button>
        <Modal open={open} onClose={this.toggleModal}>
          <ModalRegister>
            <SocialContainer />
          </ModalRegister>
        </Modal>
      </div>
    );
  }
}

storiesOf('UIKit', module)
  .add('ModalWrapper', () => (

    <ModalWRapper />
  ));
