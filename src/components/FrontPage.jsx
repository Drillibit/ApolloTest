import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

// libs
import { FeaturedMovie } from './UIKit/FeaturedMovie/index';
import { Tabs, TabPane } from './UIKit/Tabs';
import { Filter } from './UIKit/Filter';
import { Dropdown } from './UIKit/Dropdown';
import { Preview } from './UIKit/Preview';
import { Preloader } from './UIKit/Preloader';
import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';
import { CONFIG } from '../services/api';
import { GET_TRANDING, GET_GENRES } from './Requests/frontPage';
import { actionChannel } from '../../node_modules/redux-saga/effects';

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

const optionsData = [
  { id: 1, value: 'release_date.desc', name: 'По дате выхода' }, 
  { id: 2, value: 'popularity.asc', name: 'По рейтингу' }, 
  { id: 3, value: 'original_title.asc', name: 'По алфавиту' }
];

export class FrontPage extends Component {
  state = {
    tabCounter: 1,
    tabId: 0,
    hasMore: true,
    isLoading: false,
    activeOption: {},
    activeGenre: ''
  };

  handelGenre = e => {
    console.log(e)
    this.setState(() => ({
      activeGenre: e
    }))
  }

  handleSort = e => {
    const optionsObj = Object.assign({}, optionsData);
    this.props.activeSort(optionsObj[e].value);
    this.setState({
      activeOption: optionsObj[e]
    });
  }

  render() {
    const { fetchNowPlaying, fetchTop100, store, fetchOneMovie, fetchGenres, clearFilter, genres: { byId }, filters: { activeGenre },  } = this.props;
    return (
      <Query 
        query={GET_TRANDING} 
        variables={{ page: `${1}`, genre: this.state.activeGenre }}
        fetchPolicy='cache-and-network'
      >
      {({error, loading, data, fetchMore }) => {
        if (data.tranding === undefined) return ''
        if (error) return `Error ${error.message}`
       return (
        <FrontPageStyled onScroll={e => {
          const scrollbottom = e.target.clientHeight + e.target.scrollTop >= e.target.scrollHeight
          if (scrollbottom) {
            fetchMore({
              variables: {
                page: `${data.tranding.page + 1}`
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                const res = Object.assign({}, prev, {
                  tranding: {
                    ...prev.tranding,
                    page: fetchMoreResult.tranding.page,
                    results: [
                      ...prev.tranding.results,
                      ...fetchMoreResult.tranding.results
                    ]
                  }
                });
                return res;
              }
            });
          }
       }}>
           <FeaturedMovie movie={data.tranding.results[0]} />
          <br />
          <StyledGrid>
            <StyledRow>
              <StyledCol xs={12}>
                <Tabs onChange={id => (id === 0) 
                  ? (this.setState({ tabId: 0, tabCounter: 1, activeOption: {} }), clearFilter())
                  : (this.setState({ tabId: 1, tabCounter: 1, activeOption: {} }), clearFilter())
                }>
                  <TabPane tabName="Сейчас в кино">
                    <PreviewStyled>
                      {data.tranding.results.length > 0 && data.tranding.results.map(item => {
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

                  <TabPane tabName={<Query query={GET_GENRES}>
                     { ({error, loading, data: { genres_arr }}) => {
                       if(loading) return 'Loading...'
                       if(error) return `Error ${error.message}`
                       
                       const byId = genres_arr.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {});
                       
                       return (
                         <Filter activeGenre={byId[this.state.activeGenre]} onChange={this.handelGenre} list={genres_arr} />
                       );
                     } }
                  </Query>} />
                  <TabPane tabName={<Dropdown activeOption={this.state.activeOption} handleChange={this.handleSort} options={optionsData} />} marginLeft="auto" />
                </Tabs>
              </StyledCol>
              <StyledCol xs={12}>
                <PreloaderWrapper hasMore={this.state.hasMore}>
                  {loading && <Preloader>Загрузка</Preloader>}
                </PreloaderWrapper>
              </StyledCol>
            </StyledRow>
          </StyledGrid>
        </FrontPageStyled>
          );
        }}
      </Query>
    );
  }
}
