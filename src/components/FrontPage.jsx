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
import { LazyLoader } from './UIKit/LazyLoader';
import { CONFIG } from '../services/api';

/* eslint-disable */

const somefilm = {
  "adult": false,
  "backdrop_path": "/55Vfc1beLn3pJF4Lw83TRKHenK6.jpg",
  "belongs_to_collection": null,
  "budget": 63000000,
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    }
  ],
  "homepage": "",
  "id": 550,
  "imdb_id": "tt0137523",
  "original_language": "en",
  "original_title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "popularity": 0.5,
  "poster_path": null,
  "production_companies": [
    {
      "id": 508,
      "logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
      "name": "Regency Enterprises",
      "origin_country": "US"
    },
    {
      "id": 711,
      "logo_path": null,
      "name": "Fox 2000 Pictures",
      "origin_country": ""
    },
    {
      "id": 20555,
      "logo_path": null,
      "name": "Taurus Film",
      "origin_country": ""
    },
    {
      "id": 54050,
      "logo_path": null,
      "name": "Linson Films",
      "origin_country": ""
    },
    {
      "id": 54051,
      "logo_path": null,
      "name": "Atman Entertainment",
      "origin_country": ""
    },
    {
      "id": 54052,
      "logo_path": null,
      "name": "Knickerbocker Films",
      "origin_country": ""
    },
    {
      "id": 25,
      "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      "name": "20th Century Fox",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1999-10-12",
  "revenue": 100853753,
  "runtime": 139,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "How much can you know about yourself if you've never been in a fight?",
  "title": "Fight Club",
  "video": false,
  "vote_average": 7.8,
  "vote_count": 3439
}

const list = [
  { id: 356, name: 'Мультфильм' },
  { id: 357, name: 'Комедия' },
  { id: 358, name: 'Боевик' },
  { id: 359, name: 'Приключения' },
  { id: 360, name: 'Фантастика' },
  { id: 361, name: 'Мелодрама' },
  { id: 362, name: 'Ужасы' },
  { id: 363, name: 'Детектив' },
  { id: 364, name: 'Спорт' },
  { id: 365, name: 'Документальное' },
  { id: 366, name: 'Триллер' },
  { id: 367, name: 'Семейное кино' },
  { id: 368, name: 'Драма' },
  { id: 369, name: 'Арт-Хаус' },
];

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
  height: 800px;
`;

/*
  description: PropTypes.string,
    title: PropTypes.string,
    bg: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    genre: PropTypes.string,
    cast: PropTypes.string

    ${({ film }) => `${CONFIG.IMAGE_BASE}/original/${film.backdrop_path}`}
*/

const BACKDROP_PATH = `${CONFIG.IMAGE_BASE}/w300`;

export class FrontPage extends Component {
  state = {
    counter: 1
  };

  componentDidMount() {
    this.props.fetchNowPlaying(this.state.counter);
  }

  randomFilm = (min, max) => {
    let rand =  min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    console.log(rand, 'rand');
    return rand;
  };

  onScrollList = e => {
    const scrollbottom = e.target.scrollTop + e.target.offsetHeight === e.target.scrollHeight;
    //e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight
    console.log(scrollbottom, 'bot');
    // Если пользователь добрался до конца страницы scrollbottom = true
    if (scrollbottom) {
      this.props.fetchTop100(this.state.counter);
      this.props.addMovies();

      this.setState({ counter: this.state.counter+=1 });
      console.log(this.state.counter, 'counter');
    }
  }

  render() {
    console.log(this.props, 'this');
    const { fetchNowPlaying, fetchTop100, searchResults } = this.props;
    return (
      <FrontPageStyled onScroll={this.onScrollList}>
        <FeaturedMovie film={somefilm} />
        <StyledGrid >
          <StyledRow>
            <StyledCol xs={12}>
              <Tabs onChange={id => (id === 0) ? fetchNowPlaying(2) : fetchTop100(7)}>
                <TabPane tabName="Сейчас в кино">
                  <PreviewStyled>
                    {searchResults.length > 0 && searchResults.map(item =>
                      <Preview 
                        key={item.id}
                        title={item.title}
                        voteAverage={item.vote_average}
                        voteCount={item.vote_count}
                        bg={`${BACKDROP_PATH + item.backdrop_path}`}
                        year={item.release_date} 
                        duration={'123'}
                        pg={item.adult ? "18+" : "12+"}
                        genre={item.genre_ids}
                        description={item.overview} {...item}
                      />
                    )}
                  </PreviewStyled>
                </TabPane>

                <TabPane tabName="Топ 100">
                  <PreviewStyled>
                    {searchResults.length > 0 && searchResults.map(item =>
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

                <TabPane tabName={<Filter list={list} />} />
                <TabPane tabName={<Dropdown options={optionsData} />} marginLeft="auto" />
              </Tabs>
            </StyledCol>
            <StyledCol>
                  {/* const { hasMore, isLoading, handleLoad } = this.props;}*/}
              
              {/*isLoading && <Preloader>Загрузка</Preloader>*/}
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
