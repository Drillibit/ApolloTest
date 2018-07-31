import { storiesOf } from '@storybook/react';
import React, { Children, Component, cloneElement } from 'react';


import { Dropdown } from '../../src/components/UIKit/Dropdown';


const stories = storiesOf('UIKit/Dropdowns', module);

class CustomComponentManager extends Component {
  state = {
    activeOption: 1,
    options: [{ id: 1, value: 'По дате выхода' }, { id: 2, value: 'По рейтингу' }, { id: 3, value: 'По алфавиту' }]
  }


  handleChange = (e) => {
    const picked = e.target.value;

    this.setState({
      activeOption: picked,
    });
  };

  activeOptionText = () => {
    const activeText = this.state.options.map((option) => {
      console.log(option.id )
      if (option.id === this.state.activeOption) {
        return option.value;
      }
    });

    return activeText;
  };

  render() {
    const customComponent = Children.only(this.props.children);

    return cloneElement(customComponent, {
      btnClick: this.handleChange,
      options: this.state.options,
      activeOption: this.state.activeOptionText,
      activeOptionText: this.activeOptionText()
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

