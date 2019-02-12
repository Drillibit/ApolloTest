import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes, { func } from 'prop-types';

import { Preloader } from '$UIKit/Preloader';
import { Preview } from '$UIKit/Preview';
import { Container } from '../../../stories/helpers/Container';

const StyledLazyList = styled.div`
  height: 700px;
  overflow-y: auto;
`;

const PreloaderWrapper = styled.div`
  height: ${({ hasMore }) => (hasMore ? '170px' : '0')};
`;

export class LazyLoader extends Component {
  handleScroll = (e) => {
    const { hasMore, isLoading, handleLoad } = this.props;

    if (e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight
      && hasMore
      && !isLoading
    ) {
      handleLoad();
    }
  };

  render() {
    const {
      list,
      isLoading,
      hasMore
    } = this.props;

    return (
      <StyledLazyList onScroll={this.handleScroll}>
        <Container>
          {list.map(item => (
            <Preview
              key={item.id}
            />
          ))}
        </Container>
        <PreloaderWrapper hasMore={hasMore}>
          {isLoading && <Preloader>Загрузка</Preloader>}
        </PreloaderWrapper>
      </StyledLazyList>
    );
  }
}

LazyLoader.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  hasMore: PropTypes.bool,
  handleLoad: func,
  isLoading: PropTypes.bool,
};

LazyLoader.defaultProps = {
  list: [{}],
  hasMore: true,
  handleLoad: f => f,
  isLoading: false,
};
