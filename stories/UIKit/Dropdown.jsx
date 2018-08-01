import { storiesOf } from '@storybook/react';
import React, { Children, Component, cloneElement } from 'react';


import { Dropdown } from '../../src/components/UIKit/Dropdown';


const stories = storiesOf('UIKit/Dropdowns', module);

class CustomComponentManager extends Component {
  state = {
    isOpen: false,
    activeOption: { id: 1, value: 'По дате выхода' },
    options: [{ id: 1, value: 'По дате выхода' }, { id: 2, value: 'По рейтингу' }, { id: 3, value: 'По алфавиту' }]
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
    const customComponent = Children.only(this.props.children);

    return cloneElement(customComponent, {
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
  'Ваш компонент',
  () => (
    <CustomComponentManager>
      <Dropdown />
    </CustomComponentManager>
  )
);

