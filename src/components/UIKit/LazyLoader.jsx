import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes, { func } from 'prop-types';

import { Preloader } from '$UIKit/Preloader';
import { Preview } from '$UIKit/Preview';
import { Container } from '../../../stories/helpers/Container';

const StyledLazyList = styled.div`
  height: 700px;
  overflow-y: scroll;
`;

export class LazyLoader extends Component {
  state = {
    isLoading: false,
  }

  handleScroll = (e) => {
    const { hasMore } = this.props;

    if (hasMore) {
      if (e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight) {
        this.setState({ isLoading: true });

        setTimeout(this.props.handleLoad, 2000);
      } else {
        this.setState({ isLoading: false });
      }
    } else {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { list, indexEndElement } = this.props;

    return (
      <StyledLazyList onScroll={this.handleScroll}>
        <Container>
          {list.slice(0, indexEndElement).map(item => (
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
            />
          ))}
        </Container>

        <div>
          {this.state.isLoading && <Preloader>Загрузка</Preloader>}
        </div>
      </StyledLazyList>
    );
  }
}

LazyLoader.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  indexEndElement: PropTypes.number,
  hasMore: PropTypes.bool,
  handleLoad: func,
};

LazyLoader.defaultProps = {
  list: [{}],
  indexEndElement: 0,
  hasMore: false,
  handleLoad: f => f,
};
