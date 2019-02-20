import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

// libs
import { FeaturedContainer } from '../containers/FeatureContainer';
import { Preloader } from './UIKit/Preloader';
import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';
import { CONFIG } from '../services/api';
import { RenderTab } from './UIKit/RenderTab';
// Network
import { GET_TRANDING, GET_GENRES } from './Requests/frontPage';

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
  { id: 1, value: 'release_date.asc', name: 'По дате выхода' },
  { id: 2, value: 'popularity.desc', name: 'По рейтингу' },
  { id: 3, value: 'original_title.asc', name: 'По алфавиту' }
];

export class FrontPage extends Component {
  state = {
    tabCounter: 1,
    tabId: 0,
    isLoading: false,
    activeOption: { id: '', value: ''},
    hasMore: false,
    activeGenre: ''
  };

  handleMore = (more:boolean) => {
    this.setState({
      hasMore: more
    });
  }

  handelGenre = (e:React.MouseEvent) => {
    this.setState(() => ({
      activeGenre: e
    }))
  }

  handleSort = (e:number) => {
    const optionsObj = Object.assign({}, optionsData);
    this.setState({
      activeOption: optionsObj[e]
    });
  }

  render() {
    const { activeGenre, activeOption, tabId } = this.state;
    return (
      <Query
        query={GET_TRANDING}
        variables={{
          page: `${1}`,
          genre: activeGenre,
          sortBy: activeOption.value,
          source: tabId > 0 ? true : false
        }}
        fetchPolicy='network-only'
      >
        {({ error, loading, data, fetchMore, networkStatus }) => {
          if (data.tranding === undefined) return ''
          if (error) return `Error ${error.message}`
          return (
            <FrontPageStyled onScroll={(e:React.UIEvent) => {
              const  target = e.target as HTMLDivElement;
              const scrollbottom = target.clientHeight + target.scrollTop >= target.scrollHeight
              if (scrollbottom) {
                fetchMore({
                  variables: {
                    page: `${data.tranding.page + 1}`,
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    if (fetchMoreResult.tranding.results.length === 0) {
                      this.handleMore(false);
                    } else {
                      this.handleMore(true);
                    }
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
              <FeaturedContainer />
              <br />
              <StyledGrid>
                <StyledRow>
                  <StyledCol xs={12}>
                    <RenderTab />
                  </StyledCol>
                  <StyledCol xs={12}>
                    <PreloaderWrapper>
                      {(loading || networkStatus === 7 && this.state.hasMore) ? <Preloader>Загрузка</Preloader> : ''}
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
