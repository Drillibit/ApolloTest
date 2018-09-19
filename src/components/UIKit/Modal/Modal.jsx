import React, { Component, Children, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { bool, func, node } from 'prop-types';
import styled, { keyframes } from 'styled-components';

const root = document.getElementById('root');

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.2;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.2;
  animation: ${fadeIn} 0.2s linear;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 386px;
  border-radius: 4px;
  background-color: #ffffff;
  animation: ${slideIn} 0.2s ease-in;
  z-index: 1001;
`;

export class Modal extends Component {
  static propTypes = {
    open: bool,
    onClose: func,
    rootClose: bool,
    children: node.isRequired,
  };

  static defaultProps = {
    open: false,
    rootClose: true,
    onClose: null,
  };

  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

  componentDidMount() {
    root.appendChild(this.element);
  }

  componentWillUnmount() {
    root.removeChild(this.element);
  }

  handleText = (e) => {
    const { value } = e.target;
    this.setState(() => ({
      text: value
    }));
  };

  render() {
    const {
      open, onClose, rootClose, children
    } = this.props;

    if (!open) return null;

    const content = Children.map(children, child =>
      cloneElement(child, { onClose }),
    );

    return ReactDOM.createPortal(
      <Container>
        <ModalContainer>
          {content}
        </ModalContainer>
        <Overlay onClick={rootClose && onClose} />
      </Container>,
      this.element,
    );
  }
}
