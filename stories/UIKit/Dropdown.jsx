import React, { Children, Component, cloneElement } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
    activeOption: { id: 1, value: 'По дате выхода' },
    options: optionsData
  }

  handleChange = (picked) => {
    const { options } = this.state;
    const res = options.find(({ id }) => picked === id);
    this.setState({
      activeOption: res
    });
    action('handleChange')(picked);
  };

  render() {
    const dropdown = Children.only(this.props.children);

    return cloneElement(dropdown, {
      handleChange: this.handleChange,
      options: this.state.options,
      activeOption: this.state.activeOption
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

