import { storiesOf } from '@storybook/react';
import React, { Children, Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Container } from '../helpers/Container';
import { Dropdown } from '../../src/components/UIKit/Dropdown';

const stories = storiesOf('UIKit/Dropdowns', module);

const optionsData = [{ id: 1, value: 'По дате выхода' }, { id: 2, value: 'По рейтингу' }, { id: 3, value: 'По алфавиту' }];

class DropdownWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  state = {
    isOpen: false,
    activeOption: { id: 1, value: 'По дате выхода' },
    options: optionsData
  }

  handleChange = (e) => {
    const { options } = this.state;
    const picked = parseInt(e.target.value, 10);
    const res = options.find(({ id }) => picked === id);
    this.setState({
      activeOption: res,
      isOpen: false
    });
  };

  closeDropdown = () => {
    this.setState({
      isOpen: false
    });
  }

  showDropdown = () => {
    this.setState({
      isOpen: true
    });
  };

  render() {
    const dropdown = Children.only(this.props.children);

    return cloneElement(dropdown, {
      handleChange: this.handleChange,
      options: this.state.options,
      activeOption: this.state.activeOption,
      isOpen: this.state.isOpen,
      showDropdown: this.showDropdown,
      closeDropdown: this.closeDropdown
    });
  }
}

stories.addWithJSX(
  'Dropdown component',
  () => (
    <Container>
      <DropdownWrapper>
        <Dropdown />
      </DropdownWrapper>
    </Container>
  )
);

