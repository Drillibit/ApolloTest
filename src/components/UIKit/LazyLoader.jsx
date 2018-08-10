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
  handleScroll = (e) => {
    const { hasMore, handleLoad } = this.props;

    if (e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight && hasMore) {
      handleLoad();
    }
  };

  render() {
    const { list, indexEndElement, isLoading } = this.props;
    console.log(this.props.isLoading);

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
          {isLoading && <Preloader>Загрузка</Preloader>}
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
  isLoading: PropTypes.bool,
};

LazyLoader.defaultProps = {
  list: [{}],
  indexEndElement: 0,
  hasMore: true,
  handleLoad: f => f,
  isLoading: false,
};
