import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { History } from 'history';
import { CONFIG } from '../services/api';

import { colors } from './helpers/colors';
import { H1, H2, SmallText, LargeText } from './UIKit/Typography';
import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';
import { MoviePlayer } from './MoviePlayer';
import { Button } from './UIKit/Button';
import { Icon } from './UIKit/Icon';
import { Rating } from './UIKit/Rating';
import { Quote } from './UIKit/Quote';
import { Preloader } from '../components/UIKit/Preloader';
import { Preview } from '../components/UIKit/Preview';
import { FavouriteControll } from '../containers/FavouriteControll';

const StyledCustomRow = styled(StyledRow)`
  margin-bottom: 50px;
`;

const StyledSimilar = styled.div`
  display: flex;
  margin: 5px 0 80px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledBottom = styled.div`
  display: flex;
  margin: 25px;
`;

const StyledLargeText = styled(LargeText)`
  color: ${colors.grey200};
`;

const StyledSmallInfo = styled(LargeText)`
  color: ${colors.grey500};
  margin-right: 10px;
`;

const StyledDetails = styled.div`
  display: flex;
  margin: 7px 0;
  align-items: baseline;
`;

const StyledDetailsHeader = styled.span`
  min-width: 90px;
`;

const StyledPlayerWrapper = styled.div`
  display: flex;
  height: 296px;
`;

const StyledHeadersGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-bottom: 24px;
`;

const StyledLeftGroup = styled.div`
  height: 638px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledLink = styled.span`
  margin-right: 40px;
`;
const StyledBtnGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 117px 0 40px;
`;

const StyledQuoteContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
  margin-left: 48px;
`;

const StyledRatingWrapper = styled.div`
  display: flex;
  margin-left: 43px;
`;

const StyledRightGroup = styled.div`
  height: 638px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RatingStyled = styled(Rating)`
  position: relative;
  display: inline-flex;
  padding: 10px;
  border-radius: 5px;
  border: solid 2px rgba(255, 255, 255, 0.2);
  margin-left: 48px;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background-color: rgba(73, 76, 98, 0.2);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(5px);
    padding: 10px;
    border-radius: 5px;
  }
`;

const StyledPreloderFront = styled.div`
  min-height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

type StyledBgKeeperType = {
  bg: string
}

const StyledBgKeeper = styled.div`
  min-height: 638px;
  width: 100%;
  background-image: 
        linear-gradient(325deg, transparent, #130621 120%), 
        linear-gradient(206deg, transparent, #130621 81%),
    url('${({ bg }:StyledBgKeeperType) => `https://image.tmdb.org/t/p/original${bg}`}');
  background-size: 100% 100%,100% 100% , cover;
  background-repeat: no-repeat;
  padding-bottom: 40px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

type MoviePageProps = {
  video: { key: string },
  similar: [{id: string}],
  favourite: boolean,
  toggleFavourite: () => void,
  favourites: { key: boolean },
  poster_path: string,
  backdrop_path: string,
  genres: [{name: string}],
  id: string,
  title: string,
  original_title: string,
  release_date: string,
  vote_average: number,
  vote_count: number,
  tagline: string,
  production_countries: [],
  runtime: string,
  overview: string,
  history: History,
  match: {
    params: {
      id: string
    }
  } 
};

type MoviePageState =  {
  playing: boolean,
  path: string
}

export class MoviePage extends PureComponent<MoviePageProps, MoviePageState> {
  static getDerivedStateFromProps(props:MoviePageProps, state:MoviePageState) {
    if (props.match.params.id !== state.path) {
      return { playing: false, path: props.match.params.id };
    }

    return null;
  }

  state = {
    playing: false,
    path: ''
  };

  onPlay = () => {
    this.setState({
      playing: true
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const {
      poster_path,
      backdrop_path,
      genres,
      id,
      title,
      original_title,
      release_date,
      vote_average,
      vote_count,
      tagline,
      production_countries,
      runtime,
      overview,
      similar
    } = this.props;

    if (!this.props.id) {
      return (
        <StyledPreloderFront>
          <Preloader>Загрузка</Preloader>
        </StyledPreloderFront>
      );
    }
    return (
      <StyledContainer>
        <StyledBgKeeper bg={backdrop_path}>
          <StyledGrid>
            <StyledRow>
              <StyledCol xs={12} md={6}>
                <StyledLeftGroup>
                  <StyledBtnGroup>
                    <StyledLink>
                      <Button
                        btnType="transparent-white"
                        btnSize="small"
                        onClick={this.goBack}
                      >
                        <Icon size="" color="" icon="chevron-left" />
                        Назад
                      </Button>
                    </StyledLink>
                    <FavouriteControll
                      btnType="transparent-white"
                      movieId={id}
                    />
                  </StyledBtnGroup>
                  <StyledHeadersGroup>
                    <H1>{title}</H1>
                    <SmallText>{original_title}</SmallText>
                  </StyledHeadersGroup>
                  <StyledPlayerWrapper>
                    <MoviePlayer
                      link={this.props.video.key}
                      image={poster_path}
                      playing={this.state.playing}
                      onPlay={this.onPlay}
                    />
                  </StyledPlayerWrapper>
                </StyledLeftGroup>
              </StyledCol>
              <StyledCol xs={12} md={6}>
                <StyledRightGroup>
                  {tagline && (
                    <StyledQuoteContainer>
                      <Quote>
                        <H2>
                          {tagline.charAt(0) === '«'
                            ? tagline.slice(1, -1)
                            : tagline}
                        </H2>
                      </Quote>
                    </StyledQuoteContainer>
                  )}
                  <StyledRatingWrapper>
                    <RatingStyled
                      voteAverage={vote_average}
                      voteCount={vote_count}
                      size="lg"
                    />
                  </StyledRatingWrapper>
                </StyledRightGroup>
              </StyledCol>
            </StyledRow>
          </StyledGrid>
        </StyledBgKeeper>
        <StyledBottom>
          <StyledGrid>
            <StyledCustomRow>
              <StyledCol xs={12} md={6}>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <StyledLargeText>Год:</StyledLargeText>
                  </StyledDetailsHeader>
                  <StyledSmallInfo>
                    {release_date.split('-')[0]}
                  </StyledSmallInfo>
                </StyledDetails>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <StyledLargeText>Страна:</StyledLargeText>
                  </StyledDetailsHeader>
                  <StyledSmallInfo>
                    {production_countries.map(
                      (gen: { name:string }, index) =>
                        `${name}${
                          production_countries.length - 1 !== index ? ', ' : ''
                        }`
                    )}
                  </StyledSmallInfo>
                </StyledDetails>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <StyledLargeText>Жанр:</StyledLargeText>
                  </StyledDetailsHeader>
                  <StyledSmallInfo>
                    {genres.map(
                      (gen, index) =>
                        `${gen.name}${genres.length - 1 !== index ? ', ' : ''}`
                    )}
                  </StyledSmallInfo>
                </StyledDetails>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <StyledLargeText>Время:</StyledLargeText>
                  </StyledDetailsHeader>
                  <StyledSmallInfo>{runtime} мин</StyledSmallInfo>
                </StyledDetails>
              </StyledCol>
              <StyledCol xs={12} md={6}>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <StyledLargeText>Описание:</StyledLargeText>
                  </StyledDetailsHeader>
                  <StyledSmallInfo>{overview}</StyledSmallInfo>
                </StyledDetails>
              </StyledCol>
            </StyledCustomRow>
            <StyledRow>
              <StyledCol md={12}>
                {similar.length > 0 && (
                  <StyledDetailsHeader>
                    <StyledLargeText>Похожие</StyledLargeText>
                  </StyledDetailsHeader>
                )}
                <StyledSimilar>
                  {similar.length > 0
                    ? similar.map((item:any) => {
                      const BACKDROP_PATH = `${CONFIG.IMAGE_BASE}/w300`;
                      const bg:string = item.poster_path ? BACKDROP_PATH + item.poster_path : '../assets/img/background.jpg';
                      return <Preview 
                        key={item.id}
                        title={item.title}
                        voteAverage={item.vote_average}
                        voteCount={item.vote_count}
                        bg={bg}
                        year={item.release_date}
                        duration={'123'}
                        pg={item.adult ? "18+" : "12+"}
                        genre={item.genre_ids}
                        description={item.overview} {...item}
                      />
                    })
                    : ''}
                </StyledSimilar>
              </StyledCol>
            </StyledRow>
          </StyledGrid>
        </StyledBottom>
      </StyledContainer>
    );
  }
}
