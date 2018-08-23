import React, { Component } from 'react';
import { object, objectOf } from 'prop-types';
import styled from 'styled-components';

// libs
import { FeaturedMovie } from './UIKit/FeaturedMovie';
import { Tabs, TabPane } from './UIKit/Tabs';
import { Filter } from './UIKit/Filter';
import { Dropdown } from './UIKit/Dropdown';
import { Preview } from './UIKit/Preview';
import { Preloader } from './UIKit/Preloader';
import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';
import { CONFIG } from '../services/api';

/* eslint-disable */

const optionsData = [{ id: 1, value: 'По дате выхода' }, { id: 2, value: 'По рейтингу' }, { id: 3, value: 'По алфавиту' }];

const PreviewStyled = styled.div`
  margin: auto -20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const FrontPageStyled = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
`;

const PreloaderWrapper = styled.div`
  height: 170px;
`;

const BACKDROP_PATH = `${CONFIG.IMAGE_BASE}/w300`;

export class FrontPage extends Component {
  state = {
    nowPlayingCounter: 1,
    top100Counter: 1,
    tabId: 0,
    hasMore: true,
    isLoading: false,
  };

  componentDidMount() {
     const { fetchNowPlaying, fetchGenres } = this.props;
    // после загрузки страницы подтянем в наш store 
    // 1. объект содержащий жанры с соответствующими им id
    // 2. подгрузим список фильмов которые сейчас идут в кино это действие по умолчанию 
    // поскольку пользователь при первом посещении страницы сразу попадает именно сюда
    fetchNowPlaying();
    fetchGenres();
  }

  // static getDerivedStateFromProps(nextProps) {
  //   console.log(nextProps, 'next');
  //   // console.log(prevState, 'prev');
    
  //   if (nextProps.filmsList.movies.filmsList.length !== 0 && nextProps.filmsList.movies.filmsList.movie != 0) {
  //     const rand = Math.floor(Math.random() * nextProps.filmsList.movies.filmsList.length);
  //     console.log(rand);
  //       nextProps.fetchOneMovie(nextProps.filmsList.movies.filmsList[rand]);
  //   }
  // }
 
  randomFilm = arr => {
    const rand = Math.floor(Math.random() * arr.length);
    console.log(rand);
    return arr[rand];
  }

  onScrollList = e => {
    const { hasMore, isLoading } = this.state;
    const scrollbottom = e.target.clientHeight + e.target.scrollTop >= e.target.scrollHeight
    if (scrollbottom && hasMore && !isLoading) {
      this.handleLoad();
    }
  }

  handleLoad = () => {
    const { fetchNowPlaying, fetchTop100 } = this.props;
    const { tabId, nowPlayingCounter, top100Counter } = this.state;
    this.setState({ isLoading: true });
    if (false) { // есть ли ещё фильмы на сервере
      this.setState({ hasMore: false, nowPlayingCounter: a });
    } else {

      if (tabId) {
        let counter = this.state.top100Counter += 1;
        fetchTop100(counter);
        this.setState({ hasMore: true, top100Counter: counter });
      } else {
        let counter = this.state.nowPlayingCounter += 1;
        fetchNowPlaying(counter);
        this.setState({ hasMore: true, nowPlayingCounter: counter });
      }

    }
    this.setState({ isLoading: false });
    // if (tabId) {
    //   this.setState({ nowPlayingCounter: nowPlayingCounter += 1});
    //   fetchNowPlaying(nowPlayingCounter);
    //   this.setState({ hasMore: true });
    //   } else {
    //     this.setState({ top100Counter: top100Counter += 1});
    //     fetchTop100(top100Counter);
    //     this.setState({ hasMore: true });
    //   }
      
    // const a = nowPlayingCounter + 1;
    // const b = top100Counter + 1;
    // (tabId === 0) ? fetchNowPlaying(a) : fetchTop100(b);
    // this.setState({ hasMore: true, nowPlayingCounter: a, top100Counter: b });
    // this.setState({ isLoading: false });
  };

  render() {
    console.log(this.props, 'props');
    const { fetchNowPlaying, fetchTop100, searchNowPlayingResults, filmsList, fetchByGenres } = this.props;
    const { top100Counter, nowPlayingCounter, isLoading } = this.state;
    return (
      <FrontPageStyled onScroll={this.onScrollList}>
        <FeaturedMovie film={filmsList.movies.movie} />
        <StyledGrid>
        <button onClick={() => this.props.fetchOneMovie(this.randomFilm(this.props.filmsList.movies.sorted))}>click</button>
        <button onClick={() => this.props.fetchGenres()}>genres</button>
          <StyledRow>
            <StyledCol xs={12}>
              <Tabs onChange={id => (id === 0) 
                ? (fetchNowPlaying(), this.setState({ tabId: 0, top100Counter: 1 }))
                : (fetchTop100(), this.setState({ tabId: 1, nowPlayingCounter: 1 }))
              }>
                <TabPane tabName="Сейчас в кино">
                  <PreviewStyled>
                    {filmsList.movies.filmsList.length > 0 && filmsList.movies.filmsList.map(item => (
                      <Preview 
                        key={item.id}
                        title={item.title}
                        voteAverage={item.vote_average}
                        voteCount={item.vote_count}
                        bg={item.backdrop_path ? `${BACKDROP_PATH + item.backdrop_path}` : ''}
                        year={item.release_date} 
                        duration={'123'}
                        pg={item.adult ? "18+" : "12+"}
                        genre={[this.props.filmsList.genres.byId].filter(genre => item.genre_ids == genre)}
                        description={item.overview} {...item}
                      />
                    )
                  )}
                  </PreviewStyled>
                </TabPane>

                <TabPane tabName="Топ 100">
                  <PreviewStyled>
                    {filmsList.movies.filmsList.length > 0 && filmsList.movies.filmsList.map(item =>
                      <Preview
                        key={item.id}
                        title={item.title}
                        voteAverage={item.vote_average}
                        voteCount={item.vote_count}
                        bg={`${BACKDROP_PATH + item.backdrop_path}`}
                        year={item.release_date}
                        duration={'123'}
                        pg={item.adult ? "18+" : "6+"}
                        genre={item.genre_ids}
                        description={item.overview}
                        {...item} 
                      />
                    )}
                  </PreviewStyled>
                </TabPane>

                <TabPane tabName={<Filter list={[this.props.filmsList.genres.byId]} onChange={id => {
                  // console.log(id, 'id');
                  return 0} }/>} />
                <TabPane tabName={<Dropdown options={optionsData} />} marginLeft="auto" />
              </Tabs>
            </StyledCol>
            <StyledCol xs={12}>
              <PreloaderWrapper hasMore={this.state.hasMore}>
                {isLoading && <Preloader>Загрузка</Preloader>}
              </PreloaderWrapper>
            </StyledCol>
          </StyledRow>
        </StyledGrid>
      </FrontPageStyled>
    );
  }
}

/* eslint-enable */
// FrontPage.propTypes = {
//   films: objectOf
// };

// FrontPage.defaultProps = {
//   films: {}
// };
