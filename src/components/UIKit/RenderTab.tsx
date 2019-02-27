import React, { PureComponent } from 'react';

export class RenderTab extends PureComponent {
    render() {
        return (
            <h1>Hello</h1>
        );
    }
};

{/* <Tabs onChange={id => (id === 0)
    ? (this.setState({ tabId: 0, tabCounter: 1, activeOption: {}, activeGenre: '' }))
    : (this.setState({ tabId: 1, tabCounter: 1, activeOption: {}, activeGenre: '' }))
  }>
    <TabPane tabName="Сейчас в кино">
      <PreviewStyled>
        {!(networkStatus === 7) ? ''
          : data.tranding.results.map((item:any) => {
            const bg = item.poster_path ? BACKDROP_PATH + item.poster_path : '../assets/img/background.jpg';

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
              />)
          })
        }
      </PreviewStyled>
    </TabPane>

    <TabPane tabName="Топ 100">
      <PreviewStyled>
        {!(networkStatus === 7) ? ''
          : data.tranding.results.map((item:any) =>
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
      {({ error, loading, data: { genres_arr } }) => {
        if (loading) return 'Loading...'
        if (error) return `Error ${error.message}`

        const byId = genres_arr.reduce((acc:any, item:any) => ({ ...acc, [item.id]: { ...item } }), {});

        return (
          <Filter activeGenre={byId[this.state.activeGenre]} onChange={this.handelGenre} list={genres_arr} />
        );
      }}
    </Query>} />
    <TabPane tabName={<Dropdown activeOption={this.state.activeOption} handleChange={this.handleSort} options={optionsData} />} marginLeft="auto" />
  </Tabs> */}