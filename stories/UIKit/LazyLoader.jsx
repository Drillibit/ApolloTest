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
    isLoading: false,
    end: 20,
  }

  handleLoad = () => {
    this.setState({ isLoading: true });

    clearTimeout(this.timeOut);

    this.timeOut = setTimeout(() => {
      let newEnd = this.state.end + 20;

      if (newEnd > listLength) {
        newEnd = listLength;
      }

      if (newEnd === listLength) {
        this.setState({ hasMore: false, end: newEnd });
      } else {
        this.setState({ hasMore: true, end: newEnd });
      }
      this.setState({ isLoading: false });

    }, 2000);
  };

  render() {
    const customComponent = Children.only(this.props.children);

    return cloneElement(customComponent, {
      list: filmsList,
      hasMore: this.state.hasMore,
      indexEndElement: this.state.end,
      handleLoad: this.handleLoad,
      isLoading: this.state.isLoading,
    });
  }
}

stories.addWithJSX("Lazy loader", () => (
  <LazyLoaderWrapper>
    <LazyLoader />
  </LazyLoaderWrapper>
));
