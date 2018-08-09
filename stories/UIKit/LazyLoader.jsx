/* eslint-disable */
import React, { Component, Children, cloneElement } from 'react';
import { storiesOf } from '@storybook/react';

import { LazyLoader } from '$UIKit/LazyLoader';
import { Container } from '../helpers/Container';
import { Preview } from '$UIKit/Preview';
import { filmsList } from './tmp/filmsList';

const stories = storiesOf('UIKit/LazyLoader', module);

class LazyLoaderWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: filmsList,
      hasMore: true,
      end: 20,
    };
  }

  handleScroll = () => {
    this.setState({ end: this.state.end + 20 });
  };

  render() {
    const customComponent = Children.only(this.props.children);
    const { list } = this.state;

    return cloneElement(customComponent, {
      handleBla: this.handleScroll,
      list: this.state.list,
      hasMore: this.state.hasMore,
      children: <Container>
                  {list.slice(0,this.state.end).map(item => 
                    <Preview
                      key={item.id}
                      voteAverage={item.vote_average}
                      voteCount={item.vote_count}
                      size={item.size}
                      description={item.overview}
                      title={item.title}
                      bg={item.poster}
                      year={item.release_date}
                      duration={item.duration}
                      pg={item.pg}
                      genre={item.genre}
                      cast={item.cast}
                      // bound={item.getBoundingClientRect()}
                    />
                  )}
                </Container>
                
    });
  }
}

stories.addWithJSX(
  'ВЭРИ ЛЕЙЗИ ИЗИ ЛОАДЕР',
  () => (
    <Container>
      <LazyLoaderWrapper>
        <LazyLoader />
      </LazyLoaderWrapper>
    </Container>
  )
);

