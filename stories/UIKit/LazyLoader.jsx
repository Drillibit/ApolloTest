/* eslint-disable */
import React, { Component, Children, cloneElement } from "react";
import { storiesOf } from "@storybook/react";

import { LazyLoader } from "$UIKit/LazyLoader";
import { filmsList } from "../helpers/testFilmsList";

const stories = storiesOf("UIKit/LazyLoader", module);

const listLength = filmsList.length;

class LazyLoaderWrapper extends Component {
  state = {
    hasMore: true,
    end: 20,
  }

  handleLoad = () => {
    let newEnd = this.state.end + 20;

    if (newEnd > listLength) {
      newEnd = listLength;
    }

    if (newEnd === listLength) {
      this.setState({ hasMore: false, end: newEnd });
    } else {
      this.setState({ hasMore: true, end: newEnd });
    }
  };

  render() {
    const customComponent = Children.only(this.props.children);

    return cloneElement(customComponent, {
      list: filmsList,
      hasMore: this.state.hasMore,
      indexEndElement: this.state.end,
      handleLoad: this.handleLoad,
    });
  }
}

stories.addWithJSX("Easy loader", () => (
  <LazyLoaderWrapper>
    <LazyLoader />
  </LazyLoaderWrapper>
));
