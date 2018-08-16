import React from 'react';
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
/* eslint-enable */

const StyledPreview = styled.div`
  margin-left: -20px;
`;

const TabPaneStyled = styled(TabPane)`
  color: black;
  top: 100px;
`;

export const FrontPage = props => (
  <div>{console.log(props, 'this')}
    <FeaturedMovie film={somefilm} />
    <button onClick={() => props.fetchNowPlaying()}>Click</button>
    <StyledGrid>
      <StyledRow>
        <StyledCol xs={12}>
          <Tabs>
            <TabPane tabName="Сейчас в кино">
              <StyledPreview><Preview /></StyledPreview>
            </TabPane>

            <TabPane tabName="Топ 100" >
              <StyledPreview>
                <Preview />
              </StyledPreview>
            </TabPane>

            <TabPane tabName={<Filter list={list} />} />
            <TabPane tabName={<Dropdown options={optionsData} />} />
          </Tabs>
        </StyledCol>
      </StyledRow>

      <StyledRow center="xs">
        <StyledCol>

          <Preloader />
        </StyledCol>
      </StyledRow>
    </StyledGrid>
  </div>
);
// FrontPage.propTypes = {
//   films: objectOf
// };

// FrontPage.defaultProps = {
//   films: {}
// };
