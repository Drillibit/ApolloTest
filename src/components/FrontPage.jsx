import React, { Component } from 'react';
// import { object, objectOf } from 'prop-types';
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

const optionsData = [{ id: 1, value: 'По дате выхода' }, { id: 2, value: 'По рейтингу' }, { id: 3, value: 'По алфавиту' }];

export class FrontPage extends Component {
  state = {
    tabCounter: 1,
    tabId: 0,
    hasMore: true,
    isLoading: false,
  };

  componentDidMount() {
    const { fetchNowPlaying, fetchGenres } = this.props;
    fetchNowPlaying();
    fetchGenres();
  }
 
  randomFilm = arr => {
    const rand = Math.floor(Math.random() * arr.length);
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
    const { tabId, tabCounter } = this.state;
    const { fetchNowPlaying, fetchTop100, store } = this.props;
    this.setState({ isLoading: true });

    if (store.pages === tabCounter) {
      this.setState({ hasMore: false, tabCounter: 1 });
    } else {
      switch (tabId) {
        case 0:
          const nowCounter = this.state.tabCounter += 1;
          fetchNowPlaying(nowCounter);
          this.setState({ hasMore: true, tabCounter: nowCounter });
          break;
        case 1:
          const topCounter = this.state.tabCounter += 1;
          fetchTop100(topCounter);
          this.setState({ hasMore: true, tabCounter: topCounter });
          break;
        default:
          break
      }
    }
    this.setState({ isLoading: false });
  };

  handelReq = e => {
    this.props.activeGenre(e)
  }

  render() {
    //console.log(this.props, 'props');
    //console.log(this.props.store.pages, 'pages store');
    //console.log(this.state, 'state');
    const { fetchNowPlaying, fetchTop100, store, fetchOneMovie, fetchGenres, clearFilter, genres: { byId }, filters: { activeGenre },  } = this.props;
    const { isLoading } = this.state;
    return (
      <FrontPageStyled onScroll={this.onScrollList}>
        <FeaturedMovie film={store.movie} />
        <br />
        <StyledGrid>
        <button onClick={() => fetchOneMovie(this.randomFilm(store.sorted))}>click</button>
        <button onClick={() => fetchGenres()}>genres</button>
          <StyledRow>
            <StyledCol xs={12}>
              <Tabs onChange={id => (id === 0) 
                ? (fetchNowPlaying(), this.setState({ tabId: 0, tabCounter: 1 }), clearFilter())
                : (fetchTop100(), this.setState({ tabId: 1, tabCounter: 1 }), clearFilter())
              }>
                <TabPane tabName="Сейчас в кино">
                  <PreviewStyled>
                    {store.filmsList.length > 0 && store.filmsList.map(item => {
                      let bg;
                      if (item.backdrop_path) {
                        bg = `${BACKDROP_PATH + item.backdrop_path}`;
                      } else {
                          if(item.poster_path) {
                            bg = `${BACKDROP_PATH + item.poster_path}`
                          } else {
                            bg = '../assets/img/background.jpg';
                          }
                      }
                      return (
                      <Preview 
                        key={item.id}
                        title={item.title}
                        voteAverage={item.vote_average}
                        voteCount={item.vote_count}
                        bg={bg}
                        year={item.release_date} 
                        duration={'123'}
                        pg={item.adult ? "18+" : "12+"}
                        genre={'1'}
                        description={item.overview} {...item}
                      />)})
                    
                  }
                  </PreviewStyled>
                </TabPane>

                <TabPane tabName="Топ 100">
                  <PreviewStyled>
                    {store.filmsList.length > 0 && store.filmsList.map(item =>
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

                <TabPane tabName={<Filter activeGenre={activeGenre > 0 ? byId[activeGenre].name : 'Жанр'} onChange={this.handelReq} list={Object.values(byId)} />} />
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
