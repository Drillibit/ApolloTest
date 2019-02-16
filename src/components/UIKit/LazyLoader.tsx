import React, { Component } from 'react';
import styled from 'styled-components';

import { Preloader } from './Preloader';
import { Preview } from './Preview';
import { Container } from '../helpers/Container';

const StyledLazyList = styled.div`
  height: 700px;
  overflow-y: auto;
`;

type PreloaderWrapperType = {
  hasMore: boolean
};
const PreloaderWrapper = styled.div<PreloaderWrapperType>`
  height: ${({ hasMore }) => (hasMore ? '170px' : '0')};
`;

type LazyLoaderProps = {
  hasMore: boolean,
  isLoading: boolean,
  list: [{ id:string }],
  handleLoad: () => void
};
export class LazyLoader extends Component<LazyLoaderProps> {
  static defaultProps = {
    list: [{}],
    hasMore: true,
    isLoading: false,
  };
  handleScroll = (e:any) => {
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
